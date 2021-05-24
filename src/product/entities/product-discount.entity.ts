import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, Entity } from 'typeorm'

@ObjectType()
@Entity()
export class ProductDiscount {
  @Field(() => Int, { nullable: true })
  @Column()
  percentage: number

  @Field(() => Date, { nullable: true })
  @Column()
  endsAt: Date
}
