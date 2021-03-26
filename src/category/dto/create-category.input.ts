import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CategoryInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  imgUrl: string

  @Field()
  isPublic: boolean
}
