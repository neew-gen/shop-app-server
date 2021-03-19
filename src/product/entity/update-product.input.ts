import { ProductInput } from './create-product.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateProductInput extends PartialType(ProductInput) {
  @Field()
  id: string

  @Field()
  category: string

  @Field()
  name: string

  @Field({ nullable: true })
  img: string

  @Field((type) => Int, { nullable: true })
  price: number

  @Field({ nullable: true })
  description: string
}
