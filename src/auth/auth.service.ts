import { Injectable } from '@nestjs/common'
import { UserService } from './user/user.service'
import { JwtService, JwtSignOptions } from '@nestjs/jwt'
import { UserEntity } from './user/entities/user.entity'
import { AuthPayload } from './dto/auth-payload.dto'
// import { RefreshTokenService } from '../refresh-token/refresh-token.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService, // private refreshTokenService: RefreshTokenService,
  ) {}

  public buildResponsePayload(
    user: UserEntity,
    accessToken: string,
    refreshToken?: string,
  ): AuthPayload {
    return {
      userId: user._id,
      userData: {},
      tokens: {
        access_token: accessToken,
        refresh_token: refreshToken,
      },
    }
  }

  // async validateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.userService.findOne(username)
  //   if (user && user.password === pass) {
  //     const { password, ...result } = user
  //     return result
  //   }
  //   return null
  // }

  // public async login(loginUserDto: LoginUserDto) {
  //   const user = await this.userService.findByLogin(loginUserDto)
  //
  //   // generate and sign token
  //   const token = this.generateAccessToken(user)
  //
  //   return {
  //     username: user.username,
  //     ...token,
  //   }
  // }

  // public async generateAccessToken(user: UserEntity): Promise<string> {
  //   const opts: JwtSignOptions = {
  //     // ...BASE_OPTIONS,
  //     expiresIn: process.env.ACCESS_EXPIRED,
  //     subject: user._id,
  //   }
  //
  //   return this.jwtService.sign({}, opts)
  // }
  //
  // public async generateRefreshToken(user: UserEntity): Promise<string> {
  //   const expiresIn = process.env.REFRESH_EXPIRED
  //   const token = await this.refreshTokenService.createRefreshToken(
  //     user,
  //     expiresIn,
  //   )
  //
  //   const opts: JwtSignOptions = {
  //     // ...BASE_OPTIONS,
  //     expiresIn,
  //     subject: user._id,
  //     jwtid: token._id,
  //   }
  //
  //   return this.jwtService.sign({}, opts)
  // }

  // private createToken({ username }: UserEntity): any {
  //   const expiresIn = process.env.EXPIRES_IN
  //
  //   const accessToken = this.jwtService.sign({ username })
  //   console.log(accessToken)
  //   return {
  //     expiresIn,
  //     accessToken,
  //   }
  // }
}
