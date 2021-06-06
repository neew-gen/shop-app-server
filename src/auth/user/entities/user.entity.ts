import { Column, Entity, ObjectIdColumn } from 'typeorm'

import { UserDataEntity } from './user-data.entity'

@Entity('user')
export class UserEntity {
  @ObjectIdColumn()
  _id: string

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  roles: string[]

  @Column()
  data: UserDataEntity
}
