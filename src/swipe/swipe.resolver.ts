import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { SwipeService } from './swipe.service'
import { Swipe } from './entities/swipe.entity'
import { CreateSwipeInput } from './dto/create-swipe.input'
import { UpdateSwipeInput } from './dto/update-swipe.input'
import { UpdateIndexInput } from './dto/update-index.input.js'

@Resolver(() => Swipe)
export class SwipeResolver {
  constructor(private readonly swipeService: SwipeService) {}

  @Mutation(() => Swipe)
  createSwipe(@Args('createSwipeInput') createSwipeInput: CreateSwipeInput) {
    return this.swipeService.create(createSwipeInput)
  }
  @Query(() => [Swipe], { name: 'swipes' })
  findAll() {
    return this.swipeService.findAll()
  }
  @Mutation(() => Swipe)
  updateIndex(
    @Args('updateIndexInput', { type: () => [UpdateIndexInput] })
    updateIndexInput: UpdateIndexInput[],
  ) {
    return this.swipeService.updateIndex(updateIndexInput)
  }

  @Query(() => Swipe, { name: 'swipe' })
  findOne(@Args('id') id: string) {
    return this.swipeService.findOne(id)
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
