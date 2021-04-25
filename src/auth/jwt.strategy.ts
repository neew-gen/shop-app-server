import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import { JwtPayload } from './dto/jwt-payload.dto'
import { UserService } from './user/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_SECRET,
    })
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.findById(payload.sub)
    if (!user) {
      throw new UnprocessableEntityException('Refresh token malformed')
    }
    return user
  }
}
