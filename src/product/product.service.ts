import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductModel } from './entity/product.model'
import { MongoRepository, Repository } from 'typeorm'
import { ProductInput } from './entity/create-product.input'
// import { UpdateProductInput } from './dto/update-product.input'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductModel)
    private productRepository: MongoRepository<ProductModel>,
  ) {}
  findByCategory(category: string): Promise<ProductModel[]> {
    return this.productRepository
      .createQueryBuilder('product')
      .where('product.category = :category', { category })
      .getMany()
  }
  create(productInput: ProductInput) {
    return this.productRepository.save(productInput)
  }
  //
  // findAll() {
  //   return `This action returns all product`
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} product`
  // }
  //
  // update(id: number, updateProductInput: UpdateProductInput) {
  //   return `This action updates a #${id} product`
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} product`
  // }
}
