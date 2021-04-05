import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class InputSwipeData {
  @Field({ nullable: true })
  imgUrl: string

  @Field({ nullable: true })
  title: string

  @Field({ nullable: true })
  text: string
}
