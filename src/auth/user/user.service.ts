import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { UserEntity } from './entities/user.entity'
// import * as bcrypt from 'bcrypt';
import { ObjectID } from 'mongodb'
import { RegisterRequestDto } from '../dto/register-request.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: MongoRepository<UserEntity>,
  ) {}
  public async findByUsername(
    username: string,
  ): Promise<UserEntity | undefined> {
    return await this.userRepository.findOne({ username })
  }

  public async validateCredentials(
    user: UserEntity,
    password: string,
  ): Promise<boolean> {
    return password === user.password
    // return await compare(password, user.password)
  }

  public async createUserFromRequest(
    request: RegisterRequestDto,
  ): Promise<UserEntity> {
    const { username, password, name } = request

    const existingFromUsername = await this.findForUsername(request.username)

    if (existingFromUsername) {
      throw new UnprocessableEntityException('Username already in use.')
    }
    const user = { username, password, data: { name } }

    return this.userRepository.save(user)
  }

  public async findById(id: string): Promise<UserEntity | undefined> {
    const _id = new ObjectID(id)
    return this.userRepository.findOne({ _id })
  }

  private async findForUsername(
    username: string,
  ): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ username })
  }
}
