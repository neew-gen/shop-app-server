import { ProductInput } from '../dto/create-product.input'
import { InputType, Field, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateProductInput extends PartialType(ProductInput) {
  @Field({ nullable: true })
  categoryId: string

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  imgUrl: string

  @Field({ nullable: true })
  price: string

  @Field({ nullable: true })
  description: string
}
