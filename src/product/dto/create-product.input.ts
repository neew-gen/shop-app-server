import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class ProductInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  imgUrl: string

  @Field((type) => Int, { nullable: true })
  price: number

  @Field()
  description: string

  @Field()
  categoryId: string
}
