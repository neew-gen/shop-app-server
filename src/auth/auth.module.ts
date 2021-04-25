import { DynamicModule, Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserModule } from './user/user.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { JwtStrategy } from './jwt.strategy'
import { TokenModule } from './token/token.module'

console.log(typeof process.env.EXPIRES_IN)
@Module({
  imports: [UserModule, PassportModule, JwtModule.register({}), TokenModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
