import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, Entity, ObjectIdColumn } from 'typeorm'

import { ProductData } from './product-data.entity'

@ObjectType()
@Entity('product')
export class Product {
  @Field()
  @ObjectIdColumn()
  _id: string

  @Field(() => Date, { nullable: true })
  @Column()
  createdAt: Date

  @Field(() => Date, { nullable: true })
  @Column()
  updatedAt: Date

  @Field({ nullable: true })
  @Column()
  categoryId: string

  @Field(() => Int, { nullable: true })
  @Column()
  amount: number

  @Field(() => Boolean, { nullable: true })
  @Column()
  show: boolean

  @Field(() => Int, { nullable: true })
  @Column()
  likes: number

  @Field(() => ProductData, { nullable: true })
  @Column()
  productData: ProductData
}
