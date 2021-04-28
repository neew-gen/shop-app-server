import { UserEntity } from '../user/entities/user.entity'

export interface AuthPayload {
  userId: string
  userData: any
  tokens: {
    access_token: string
    refresh_token: string
  }
}
