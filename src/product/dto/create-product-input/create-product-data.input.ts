import { Field, InputType, Int } from '@nestjs/graphql'

import { CreateProductDiscountInput } from './create-product-discount.input'
import { CreateProductImageInput } from './create-product-image.input'

@InputType()
export class CreateProductDataInput {
  @Field()
  name: string

  @Field(() => Int)
  price: number

  @Field(() => [CreateProductImageInput])
  images: CreateProductImageInput[]

  @Field()
  description: string

  @Field(() => CreateProductDiscountInput, { nullable: true })
  discount: CreateProductDiscountInput | null
}
