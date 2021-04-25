import { UserEntity } from '../user/entities/user.entity'

export interface AuthPayload {
  user: UserEntity
  payload: {
    type: string
    token: string
    refresh_token?: string
  }
}
