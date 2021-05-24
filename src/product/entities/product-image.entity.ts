import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity } from 'typeorm'

@ObjectType()
@Entity()
export class ProductImage {
  @Field()
  @Column()
  id: string

  @Field()
  @Column()
  imgUrl: string
}
