import { Column, Entity } from 'typeorm'

@Entity()
export class UserDataEntity {
  @Column()
  name: string
}
