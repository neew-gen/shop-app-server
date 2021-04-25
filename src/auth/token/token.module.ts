import { Module } from '@nestjs/common'
import { TokenService } from './token.service'
import { JwtModule } from '@nestjs/jwt'
import { RefreshTokenModule } from '../refresh-token/refresh-token.module'
import { UserModule } from '../user/user.module'

@Module({
  imports: [JwtModule.register({}), RefreshTokenModule, UserModule],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
