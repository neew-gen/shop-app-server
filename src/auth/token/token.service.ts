import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { UserEntity } from '../user/entities/user.entity'
import { JwtService, JwtSignOptions } from '@nestjs/jwt'
import { RefreshTokenService } from '../refresh-token/refresh-token.service'
import * as ms from 'ms'
import { RefreshTokenEntity } from '../refresh-token/entities/refresh-token.entity'
import { RefreshTokenPayload } from '../dto/refresh-payload.dto'
import { TokenExpiredError } from 'jsonwebtoken'
import { UserService } from '../user/user.service'

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private refreshTokenService: RefreshTokenService,
    private userService: UserService,
  ) {}
  public async generateAccessToken(user: UserEntity): Promise<string> {
    const opts: JwtSignOptions = {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: ms(process.env.JWT_ACCESS_EXPIRED),
      subject: String(user._id),
    }
    return await this.jwtService.signAsync({}, opts)
  }

  public async generateRefreshToken(user: UserEntity): Promise<any> {
    const token = await this.refreshTokenService.createRefreshToken(user)
    const opts: JwtSignOptions = {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: ms(process.env.JWT_REFRESH_EXPIRED),
      subject: String(user._id),
      jwtid: String(token._id),
    }
    return await this.jwtService.signAsync({}, opts)
  }

  public async createAccessTokenFromRefreshToken(
    refreshToken: string,
  ): Promise<{ token: string; user: UserEntity }> {
    const { user } = await this.resolveRefreshToken(refreshToken)

    const token = await this.generateAccessToken(user)

    return { user, token }
  }

  public async resolveRefreshToken(
    encoded: string,
  ): Promise<{ user: UserEntity; token: RefreshTokenEntity }> {
    const payload = await this.decodeRefreshToken(encoded)
    const token = await this.getStoredTokenFromRefreshTokenPayload(payload)

    if (!token) {
      throw new UnprocessableEntityException('Refresh token not found')
    }

    if (token.isRevoked) {
      throw new UnprocessableEntityException('Refresh token revoked')
    }

    const user = await this.getUserFromRefreshTokenPayload(payload)
    if (!user) {
      throw new UnprocessableEntityException('Refresh token malformed')
    }

    return { user, token }
  }

  private decodeRefreshToken(token: string): Promise<RefreshTokenPayload> {
    try {
      return this.jwtService.verify(token, {
        secret: process.env.JWT_REFRESH_SECRET,
      })
    } catch (e) {
      if (e instanceof TokenExpiredError) {
        throw new UnprocessableEntityException('Refresh token expired')
      } else {
        throw new UnprocessableEntityException('Refresh token malformed')
      }
    }
  }

  private async getUserFromRefreshTokenPayload(
    payload: RefreshTokenPayload,
  ): Promise<UserEntity> {
    const subId = payload.sub

    if (!subId) {
      throw new UnprocessableEntityException('Refresh token malformed')
    }

    return this.userService.findById(subId)
  }

  private async getStoredTokenFromRefreshTokenPayload(
    payload: RefreshTokenPayload,
  ): Promise<RefreshTokenEntity | null> {
    const tokenId = payload.jti

    if (!tokenId) {
      throw new UnprocessableEntityException('Refresh token malformed')
    }

    return await this.refreshTokenService.findTokenById(tokenId)
  }
}
