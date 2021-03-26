import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class ProductInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  imgUrl: string

  @Field()
  price: string

  @Field()
  description: string

  @Field()
  category: string
}
