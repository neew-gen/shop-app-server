import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateProductDiscountInput {
  @Field(() => Int)
  percentage: number

  @Field(() => Date, { nullable: true })
  endsAt: Date
}
