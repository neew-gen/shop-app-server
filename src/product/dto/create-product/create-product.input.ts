import { Field, InputType, Int } from '@nestjs/graphql'

import { CreateProductData } from './create-product-data.input'

@InputType()
export class CreateProductInput {
  @Field({ nullable: true })
  categoryId: string

  @Field(() => Int, { nullable: true })
  amount: number

  @Field(() => Boolean, { nullable: true })
  show: boolean

  @Field(() => CreateProductData, { nullable: true })
  productData: CreateProductData
}
