import { ObjectType, Field, Int, InputType } from '@nestjs/graphql'
import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm'

@ObjectType()
@Entity('product')
export class ProductModel {
  @Field()
  @ObjectIdColumn()
  id: string

  @Field()
  @Column()
  name: string

  @Field({ nullable: true })
  @Column()
  img: string

  @Field((type) => Int, { nullable: true })
  @Column()
  price: number

  @Field({ nullable: true })
  @Column()
  description: string

  @Field()
  @Column()
  category: string
}
