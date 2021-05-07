import { Field, InputType, Int } from '@nestjs/graphql'

import { CreateProductDataInput } from './create-product-data.input'

@InputType()
export class CreateProductInput {
  @Field()
  categoryId: string

  @Field(() => Int)
  count: number

  @Field(() => Boolean)
  show: boolean

  @Field(() => CreateProductDataInput)
  productData: CreateProductDataInput
}
