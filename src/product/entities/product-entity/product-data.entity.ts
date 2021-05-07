import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, Entity } from 'typeorm'

import { ProductDiscountEntity } from './product-discount.entity'
import { ProductImageEntity } from './product-image.entity'

@ObjectType()
@Entity()
export class ProductDataEntity {
  @Field()
  @Column()
  name: string

  @Field(() => Int)
  @Column()
  price: number

  @Field(() => [ProductImageEntity])
  @Column()
  images: ProductImageEntity[]

  @Field()
  @Column()
  description: string

  @Field(() => ProductDiscountEntity, { nullable: true })
  @Column()
  discount: ProductDiscountEntity | null
}
