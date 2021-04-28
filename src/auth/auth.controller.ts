import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Get,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common'
import { Response } from 'express'
import { AuthService } from './auth.service'
import { LoginRequestDto } from './dto/login-request.dto'
import { UserService } from './user/user.service'
import { TokenService } from './token/token.service'
import { RefreshRequestDto } from './dto/refresh-request.dto'
import { RegisterRequestDto } from './dto/register-request.dto'
import { JwtAuthGuard } from './jwt-auth.guard'

@Controller('/api/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private tokenService: TokenService,
  ) {}
  @Post('/login')
  public async login(@Body() body: LoginRequestDto) {
    const { username, password } = body

    const user = await this.userService.findByUsername(username)
    if (!user) {
      throw new UnauthorizedException('The login is invalid.')
    }

    const valid = user
      ? await this.userService.validateCredentials(user, password)
      : false
    if (!valid) {
      throw new UnauthorizedException('The password is invalid.')
    }

    const access_token = this.tokenService.generateAccessToken(user._id)
    const refresh_token = await this.tokenService.generateRefreshToken(user._id)

    // const data = this.authService.buildResponsePayload(
    //   user,
    //   accessToken,
    //   refreshToken,
    // )

    return { access_token, refresh_token }
  }
  @Post('/refresh')
  public async refresh(@Body() body: RefreshRequestDto) {
    const access_token = await this.tokenService.createAccessTokenFromRefreshToken(
      body.refresh_token,
    )
    return { access_token }
  }

  @Post('/register')
  public async register(@Body() body: RegisterRequestDto) {
    const user = await this.userService.createUserFromRequest(body)

    const access_token = await this.tokenService.generateAccessToken(user._id)
    const refresh_token = await this.tokenService.generateRefreshToken(user._id)

    return { access_token, refresh_token }
  }

  @Get('/user')
  @UseGuards(JwtAuthGuard)
  public async getUserData(@Req() request) {
    return request.user.data
  }

  @Post('/logout')
  public async logout(@Body() body: RefreshRequestDto) {
    return await this.tokenService.logout(body.refresh_token)
  }
}
