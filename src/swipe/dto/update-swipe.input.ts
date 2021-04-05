import { CreateSwipeInput } from './create-swipe.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'
import { InputSwipeData } from './swipe-data.input'

@InputType()
export class UpdateSwipeInput {
  @Field((type) => InputSwipeData, { nullable: true })
  swipeData: InputSwipeData
}
