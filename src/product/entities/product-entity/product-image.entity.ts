import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity } from 'typeorm'

@ObjectType()
@Entity()
export class ProductImageEntity {
  @Field()
  @Column()
  id: string

  @Field()
  @Column()
  imgUrl: string
}
