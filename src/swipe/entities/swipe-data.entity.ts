import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class SwipeData {
  @Field({ nullable: true })
  imgUrl: string

  @Field({ nullable: true })
  title: string

  @Field({ nullable: true })
  text: string
}
