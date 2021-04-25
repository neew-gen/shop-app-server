import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common'
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
    const valid = user
      ? await this.userService.validateCredentials(user, password)
      : false

    if (!valid) {
      throw new UnauthorizedException('The login is invalid')
    }

    const accessToken = await this.tokenService.generateAccessToken(user)
    const refreshToken = await this.tokenService.generateRefreshToken(user)

    const payload = this.authService.buildResponsePayload(
      user,
      accessToken,
      refreshToken,
    )

    return {
      status: 'success',
      data: payload,
    }
  }
  @Post('/refresh')
  public async refresh(@Body() body: RefreshRequestDto) {
    const {
      user,
      token,
    } = await this.tokenService.createAccessTokenFromRefreshToken(
      body.refreshToken,
    )

    const payload = this.authService.buildResponsePayload(user, token)

    return {
      status: 'success',
      data: payload,
    }
  }

  @Post('/register')
  public async register(@Body() body: RegisterRequestDto) {
    console.log(body)
    const user = await this.userService.createUserFromRequest(body)

    const accessToken = await this.tokenService.generateAccessToken(user)
    const refreshToken = await this.tokenService.generateRefreshToken(user)
    //
    const payload = this.authService.buildResponsePayload(
      user,
      accessToken,
      refreshToken,
    )

    return {
      status: 'success',
      data: payload,
    }
  }

  @Get('/user')
  @UseGuards(JwtAuthGuard)
  public async getUser(@Req() request) {
    const user = request.user

    return {
      status: 'success',
      data: user,
    }
  }
}
