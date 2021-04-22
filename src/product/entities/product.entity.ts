import { ObjectType, Field, Int, InputType } from '@nestjs/graphql'
import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm'

@ObjectType()
@Entity('product')
export class ProductEntity {
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

  @Field((type) => Int, { nullable: true })
  @Column()
  price: number

  @Field({ nullable: true })
  @Column()
  description: string

  @Field({ nullable: true })
  @Column()
  categoryId: string
}

type ID = number | string
