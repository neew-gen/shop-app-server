import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'

import { CreateSwipeInput } from './dto/create-swipe.input'
import { UpdateIndexInput } from './dto/update-index.input.js'
import { UpdateSwipeInput } from './dto/update-swipe.input'
import { Swipe } from './entities/swipe.entity'

@Injectable()
export class SwipeService {
  constructor(
    @InjectRepository(Swipe)
    private swipeRepository: MongoRepository<Swipe>,
  ) {}
  findAll() {
    return this.swipeRepository.find({
      order: {
        swipeIndex: 'ASC',
      },
    })
  }

  findOne(id: string) {
    return this.swipeRepository.findOne({ id: id })
  }

  async create(createSwipeInput: CreateSwipeInput) {
    // we need to find maxIndex and increase it for 1
    const swipesArray = await this.swipeRepository.find()
    if (swipesArray.length === 0) {
      createSwipeInput.swipeIndex = 0
    } else {
      const maxIndex = Math.max(...swipesArray.map((s) => s.swipeIndex))
      createSwipeInput.swipeIndex = maxIndex + 1
    }
    return this.swipeRepository.save(createSwipeInput)
  }

  async updateIndex(updateIndexInput: UpdateIndexInput[]) {
    const promises = updateIndexInput.map((item) => {
      return this.swipeRepository.updateOne(
        {
          id: item.id,
        },
        {
          $set: { swipeIndex: item.swipeIndex },
        },
      )
    })
    return await Promise.all(promises)
  }

  update(id: string, updateSwipeInput: UpdateSwipeInput) {
    return this.swipeRepository.updateOne(
      {
        id: id,
      },
      {
        $set: updateSwipeInput,
      },
    )
  }

  delete(id: string) {
    return this.swipeRepository.deleteOne({
      id: id,
    })
  }
}
