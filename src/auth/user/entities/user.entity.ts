import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('user')
export class UserEntity {
  @ObjectIdColumn()
  _id: string

  // @Column()
  // id: string

  @Column()
  username: string

  @Column()
  password: string
}
