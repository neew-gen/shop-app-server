import { Injectable } from '@nestjs/common'
import { RefreshTokenEntity } from './entities/refresh-token.entity'
import * as ms from 'ms'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteWriteOpResultObject, MongoRepository } from 'typeorm'
import { ObjectID } from 'mongodb'

@Injectable()
export class RefreshTokenService {
  constructor(
    @InjectRepository(RefreshTokenEntity)
    private refreshTokenMongoRepository: MongoRepository<RefreshTokenEntity>,
  ) {}
  public async createRefreshToken(userId: string): Promise<any> {
    const expiration = new Date()
    expiration.setTime(
      expiration.getTime() + ms(process.env.JWT_REFRESH_EXPIRED),
    )
    const refreshToken = {
      userId,
      isRevoked: false,
      expires: expiration,
    }
    // return refreshToken
    // // // TODO turned off for test!!!!!!!!
    return await this.refreshTokenMongoRepository.save(refreshToken)
  }

  public async findTokenById(
    id: string,
  ): Promise<RefreshTokenEntity | undefined> {
    const _id = new ObjectID(id)
    return await this.refreshTokenMongoRepository.findOne({
      _id,
    })
  }

  public async deleteRefreshToken(
    id: string,
  ): Promise<DeleteWriteOpResultObject> {
    const _id = new ObjectID(id)
    return await this.refreshTokenMongoRepository.deleteOne({
      _id,
    })
  }
}
