import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ObjectID } from 'mongodb'
import { MongoRepository } from 'typeorm'

import { CreateProductInput } from './dto/create-product/create-product.input'
// import { UpdateProductInput } from './dto/update-product.input'
import { Product } from './entities/product.entity'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productMongoRepository: MongoRepository<Product>,
  ) {}
  createProduct(input: CreateProductInput) {
    const now = new Date()
    const product = {
      createdAt: now,
      updatedAt: now,
      amount: 0,
      likes: 0,
      ...input,
    }
    return this.productMongoRepository.save(product)
  }
  findByOrder(orderBy, orderParam) {
    const orderObj = {}
    orderObj[orderBy] = orderParam
    return this.productMongoRepository.find({
      where: {
        show: true,
      },
      order: orderObj,
    })
  }

  async findProductsByIds(ids) {
    const _ids = ids.map((id) => ObjectID(id))
    return Promise.all(
      _ids.map((_id) => this.productMongoRepository.findOne({ _id })),
    )
  }
  //
  // findAll() {
  //   return this.productRepository.find()
  // }
  findByCategoryId(categoryId, sortBy, sortParam) {
    const orderObj = {}
    orderObj[sortBy] = sortParam
    return this.productMongoRepository.find({
      where: {
        show: true,
        categoryId,
      },
      order: orderObj,
    })
  }
  findById(id) {
    const _id = new ObjectID(id)
    return this.productMongoRepository.findOne({ _id })
  }
  // async update(id: string, updateProductInput: UpdateProductInput) {
  //   return this.productRepository.updateOne(
  //     {
  //       id: id,
  //     },
  //     {
  //       $set: updateProductInput,
  //     },
  //   )
  // }

  // delete(id: string) {
  //   return this.productRepository.deleteOne({
  //     id: id,
  //   })
  // }
}
