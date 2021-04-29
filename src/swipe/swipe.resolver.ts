import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateSwipeInput } from './dto/create-swipe.input'
import { UpdateIndexInput } from './dto/update-index.input.js'
import { UpdateSwipeInput } from './dto/update-swipe.input'
import { Swipe } from './entities/swipe.entity'
import { SwipeService } from './swipe.service'

@Resolver(() => Swipe)
export class SwipeResolver {
  constructor(private readonly swipeService: SwipeService) {}

  @Query(() => [Swipe], { name: 'swipes' })
  findAll() {
    return this.swipeService.findAll()
  }

  @Query(() => Swipe, { name: 'swipe' })
  findOne(@Args('id') id: string) {
    return this.swipeService.findOne(id)
  }

  @Mutation(() => Swipe)
  createSwipe(@Args('createSwipeInput') createSwipeInput: CreateSwipeInput) {
    return this.swipeService.create(createSwipeInput)
  }

  @Mutation(() => Swipe)
  updateIndex(
    @Args('updateIndexInput', { type: () => [UpdateIndexInput] })
    updateIndexInput: UpdateIndexInput[],
  ) {
    return this.swipeService.updateIndex(updateIndexInput)
  }

  @Mutation(() => Swipe)
  updateSwipe(
    @Args('id') id: string,
    @Args('updateSwipeInput') updateSwipeInput: UpdateSwipeInput,
  ) {
    return this.swipeService.update(id, updateSwipeInput)
  }

  @Mutation(() => Swipe)
  deleteSwipe(@Args('id') id: string) {
    return this.swipeService.delete(id)
  }
}
