import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, Entity, Index } from 'typeorm'

import { ProductDiscount } from './product-discount.entity'
import { ProductImage } from './product-image.entity'

@ObjectType()
@Entity()
@Index('text', ['name', 'description'])
export class ProductData {
  @Field({ nullable: true })
  @Column()
  name: string

  @Field(() => Int, { nullable: true })
  @Column()
  price: number

  @Field(() => [ProductImage], { nullable: true })
  @Column()
  images: ProductImage[]

  @Field({ nullable: true })
  @Column()
  description: string

  @Field(() => ProductDiscount, { nullable: true })
  @Column()
  discount: ProductDiscount | null
}
