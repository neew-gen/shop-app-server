import { UnauthorizedException, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Strategy } from 'passport-jwt'
import { JwtStrategy } from './jwt.strategy'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {
//   handleRequest(err, user, info: Error) {
//     if (err || info || !user) {
//       throw err || info || new UnauthorizedException()
//     }
//
//     return user
//   }
// }
