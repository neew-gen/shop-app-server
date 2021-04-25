import { Injectable } from '@nestjs/common'
import { UserEntity } from '../user/entities/user.entity'
import { RefreshTokenEntity } from './entities/refresh-token.entity'
import * as ms from 'ms'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { ObjectID } from 'mongodb'

@Injectable()
export class RefreshTokenService {
  constructor(
    @InjectRepository(RefreshTokenEntity)
    private refreshTokenMongoRepository: MongoRepository<RefreshTokenEntity>,
  ) {}
  public async createRefreshToken(user: UserEntity): Promise<any> {
    const expiration = new Date()
    expiration.setTime(
      expiration.getTime() + ms(process.env.JWT_REFRESH_EXPIRED),
    )
    const token = {
      userId: user._id,
      isRevoked: false,
      expires: expiration,
    }
    // token.userId = user._id
    // token.isRevoked = false

    // token.expires = expiration
    return await this.refreshTokenMongoRepository.save(token)
    // return token.save()
  }

  public async findTokenById(
    id: string,
  ): Promise<RefreshTokenEntity | undefined> {
    const _id = new ObjectID(id)
    return await this.refreshTokenMongoRepository.findOne({
      _id,
    })
  }
}
