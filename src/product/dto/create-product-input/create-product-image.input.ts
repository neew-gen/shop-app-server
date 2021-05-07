import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateProductImageInput {
  @Field()
  id: string

  @Field()
  imgUrl: string
}
