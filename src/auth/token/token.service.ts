import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { JwtService, JwtSignOptions } from '@nestjs/jwt'
import { TokenExpiredError } from 'jsonwebtoken'

import { RefreshTokenPayload } from '../dto/refresh-payload.dto'
import { RefreshTokenEntity } from '../refresh-token/entities/refresh-token.entity'
import { RefreshTokenService } from '../refresh-token/refresh-token.service'
import { UserEntity } from '../user/entities/user.entity'
import { UserService } from '../user/user.service'

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private refreshTokenService: RefreshTokenService,
    private userService: UserService,
  ) {}
  public generateAccessToken(userId: string): string {
    const opts: JwtSignOptions = {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRED,
      subject: String(userId),
    }
    return this.jwtService.sign({}, opts)
  }

  public async generateRefreshToken(userId: string): Promise<any> {
    const refreshToken = await this.refreshTokenService.createRefreshToken(
      userId,
    )
    const opts: JwtSignOptions = {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRED,
      subject: String(userId),
      jwtid: String(refreshToken._id),
    }
    return this.jwtService.sign({}, opts)
  }

  public async createAccessTokenFromRefreshToken(
    refreshToken: string,
  ): Promise<string> {
    // const decoded = await this.decodeRefreshToken(refreshToken)
    // console.log(decoded)
    // const
    const userId = await this.resolveRefreshToken(refreshToken)

    const token = this.generateAccessToken(userId)

    return token
  }

  public async logout(refreshToken: string): Promise<void> {
    const decoded = await this.decodeRefreshToken(refreshToken)
    const deletionResult = await this.refreshTokenService.deleteRefreshToken(
      decoded.jti,
    )
    if (!deletionResult.result) {
      throw new UnprocessableEntityException('Deletion error.')
    }
  }

  private async resolveRefreshToken(encoded: string): Promise<string> {
    const payload = await this.decodeRefreshToken(encoded)
    const token = await this.getStoredTokenFromRefreshTokenPayload(payload)
    if (!token) {
      throw new UnprocessableEntityException('Refresh token not found')
    }
    const { isRevoked, userId } = token

    if (isRevoked) {
      throw new UnprocessableEntityException('Refresh token revoked')
    }

    // const user = await this.getUserFromRefreshTokenPayload(payload)
    // if (!user) {
    //   throw new UnprocessableEntityException('Refresh token malformed')
    // }
    // return payload.sub
    return userId
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

  // private async getUserFromRefreshTokenPayload(
  //   payload: RefreshTokenPayload,
  // ): Promise<UserEntity> {
  //   const subId = payload.sub
  //
  //   if (!subId) {
  //     throw new UnprocessableEntityException('Refresh token malformed')
  //   }
  //
  //   return this.userService.findById(subId)
  // }

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
