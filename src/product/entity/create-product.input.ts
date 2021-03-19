import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class ProductInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field({ nullable: true })
  img: string

  @Field((type) => Int, { nullable: true })
  price: number

  @Field({ nullable: true })
  description: string

  @Field()
  category: string
}
