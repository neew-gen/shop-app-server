import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, Entity } from 'typeorm'

@ObjectType()
@Entity()
export class ProductDiscountEntity {
  @Field(() => Int)
  @Column()
  percentage: number

  @Field(() => Date, { nullable: true })
  @Column()
  endsAt: Date
}
