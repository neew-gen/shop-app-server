import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductEntity } from './entities/product.entity'
import { MongoRepository } from 'typeorm'
import { ProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: MongoRepository<ProductEntity>,
  ) {}
  // findByCategory(category: string): Promise<ProductModelTypeOrm[]> {
  //   return this.productRepository
  //     .createQueryBuilder('product')
  //     .where('product.category = :category', { category })
  //     .getMany()
  // }
  create(productInput: ProductInput) {
    return this.productRepository.save(productInput)
  }
  //
  findAll() {
    return this.productRepository.find()
  }

  findOne(id: string) {
    return this.productRepository.findOne({ id: id })
  }

  async update(id: string, updateProductInput: UpdateProductInput) {
    return this.productRepository.updateOne(
      {
        id: id,
      },
      {
        $set: updateProductInput,
      },
    )
  }

  delete(id: string) {
    return this.productRepository.deleteOne({
      id: id,
    })
  }
}
