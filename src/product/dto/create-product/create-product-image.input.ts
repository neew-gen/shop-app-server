import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateProductImage {
  @Field()
  id: string

  @Field()
  imgUrl: string
}
