import { Field, InputType, Int } from '@nestjs/graphql'

import { CreateProductDiscount } from './create-product-discount.input'
import { CreateProductImage } from './create-product-image.input'

@InputType()
export class CreateProductData {
  @Field({ nullable: true })
  name: string

  @Field(() => Int, { nullable: true })
  price: number

  @Field(() => [CreateProductImage], { nullable: true })
  images: CreateProductImage[]

  @Field({ nullable: true })
  description: string

  @Field(() => CreateProductDiscount, { nullable: true })
  discount: CreateProductDiscount | null
}
