import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateProductDiscount {
  @Field(() => Int, { nullable: true })
  percentage: number

  @Field(() => Date, { nullable: true })
  endsAt: Date
}
