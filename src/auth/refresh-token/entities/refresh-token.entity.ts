import { Entity, Column, ObjectIdColumn } from 'typeorm'

@Entity('refresh-token')
export class RefreshTokenEntity {
  @ObjectIdColumn()
  _id: string

  @Column()
  userId: string

  @Column()
  isRevoked: boolean

  @Column()
  expires: Date
}
