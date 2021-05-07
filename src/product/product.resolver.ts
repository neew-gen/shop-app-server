import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateProductInput } from './dto/create-product-input/create-product.input'
import { ProductEntity } from './entities/product-entity/product.entity'
import { ProductService } from './product.service'
// import { UpdateProductInput } from './dto/update-product.input'

@Resolver(() => ProductEntity)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => ProductEntity)
  createProduct(@Args('createProduct') createProductInput: CreateProductInput) {
    return this.productService.createProduct(createProductInput)
  }

  // @Query(() => [ProductEntity], { name: 'products' })
  // findAll() {
  //   return this.productService.findAll()
  // }
  //
  // @Query(() => ProductEntity, { name: 'product' })
  // findOne(@Args('id') id: string) {
  //   return this.productService.findOne(id)
  // }
  //
  // @Query(() => [ProductEntity], { name: 'productsByCategoryId' })
  // findByCategoryId(@Args('categoryId') categoryId: string) {
  //   return this.productService.findByCategoryId(categoryId)
  // }

  // @Mutation(() => ProductEntity)
  // updateProduct(
  //   @Args('id') id: string,
  //   @Args('product') updateProductInput: UpdateProductInput,
  // ) {
  //   return this.productService.update(id, updateProductInput)
  // }
  //
  // @Mutation(() => ProductEntity)
  // deleteProduct(@Args('id') id: string) {
  //   return this.productService.delete(id)
  // }
}
