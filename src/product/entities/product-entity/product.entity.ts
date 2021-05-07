import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, Entity, ObjectIdColumn } from 'typeorm'

import { ProductDataEntity } from './product-data.entity'

@ObjectType()
@Entity('product')
export class ProductEntity {
  @Field()
  @ObjectIdColumn()
  _id: string

  @Field(() => Date)
  @Column()
  createdAt: Date

  @Field()
  @Column()
  categoryId: string

  @Field(() => Int)
  @Column()
  count: number

  @Field(() => Boolean)
  @Column()
  show: boolean

  @Field(() => ProductDataEntity)
  @Column()
  productData: ProductDataEntity
}
