import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'
import { SwipeData } from './swipe-data.entity'

@ObjectType()
@Entity('swipe')
export class Swipe {
  @ObjectIdColumn()
  _id: ObjectID

  @Field({ nullable: true })
  @Column()
  id: string

  @Field((type) => Int, { nullable: true })
  @Column()
  swipeIndex: number

  @Field((type) => SwipeData, { nullable: true })
  @Column()
  swipeData: SwipeData
}
