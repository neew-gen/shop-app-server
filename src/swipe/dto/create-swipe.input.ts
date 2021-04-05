import { InputType, Int, Field } from '@nestjs/graphql'
import { InputSwipeData } from './swipe-data.input'

@InputType()
export class CreateSwipeInput {
  @Field()
  id: string

  @Field((type) => Int, { nullable: true })
  swipeIndex?: number

  @Field({ nullable: true })
  swipeData: InputSwipeData
}
