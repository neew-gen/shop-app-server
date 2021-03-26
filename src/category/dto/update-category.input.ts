import { CategoryInput } from './create-category.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateCategoryInput extends PartialType(CategoryInput) {
  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  imgUrl: string

  @Field({ nullable: true })
  isPublic: boolean
}
