import { ObjectType, Field } from '@nestjs/graphql'
import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm'

@ObjectType()
@Entity('category')
export class Category {
  @ObjectIdColumn()
  _id: ObjectID

  @Field({ nullable: true })
  @Column()
  id: string

  @Field({ nullable: true })
  @Column()
  name: string

  @Field({ nullable: true })
  @Column()
  imgUrl: string

  @Field({ nullable: true })
  @Column()
  isPublic: boolean
}
