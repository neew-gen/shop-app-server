import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'

import { CreateProductInput } from './dto/create-product-input/create-product.input'
// import { UpdateProductInput } from './dto/update-product.input'
import { ProductEntity } from './entities/product-entity/product.entity'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productMongoRepository: MongoRepository<ProductEntity>,
  ) {}
  createProduct(createProductInput: CreateProductInput) {
    const product = {
      createdAt: new Date(),
      count: 0,
      ...createProductInput,
    }
    return this.productMongoRepository.save(product)
  }
  //
  // findAll() {
  //   return this.productRepository.find()
  // }

  // findOne(id: string) {
  //   return this.productRepository.findOne({ id: id })
  // }
  // findByCategoryId(categoryId: string) {
  //   return this.productRepository.find({ categoryId: categoryId })
  // }
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
