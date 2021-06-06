import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
// import * as bcrypt from 'bcrypt';
import { ObjectID } from 'mongodb'
import { MongoRepository } from 'typeorm'

import { RegisterRequestDto } from '../dto/register-request.dto'
import { UserEntity } from './entities/user.entity'

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
    roles: string[],
  ): Promise<void> {
    const isValidPassword = (): boolean => password === user.password
    if (!isValidPassword)
      throw new UnauthorizedException('The password is invalid.')
    const userRoles = user.roles
    if (!userRoles) throw new UnauthorizedException('You do not have access.')
    let hasRoles = false
    for (const role of roles) {
      if (userRoles.includes(role)) hasRoles = true
    }
    if (!hasRoles) throw new UnauthorizedException('You do not have access.')
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
