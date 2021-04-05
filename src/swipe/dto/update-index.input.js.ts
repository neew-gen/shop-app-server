import { CreateSwipeInput } from './create-swipe.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateIndexInput extends PartialType(CreateSwipeInput) {
  @Field()
  id: string

  @Field((type) => Int)
  swipeIndex: number
}
