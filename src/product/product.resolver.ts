import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { type } from 'os'

import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { Roles } from '../auth/roles/roles.decorator'
import { Role } from '../auth/roles/roles.enum'
import { CreateProductInput } from './dto/create-product/create-product.input'
import { Product } from './entities/product.entity'
import { ProductService } from './product.service'
// import { UpdateProductInput } from './dto/update-product.input'

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  // @UseGuards(JwtAuthGuard)
  // @Roles(Role.Admin)
  createProduct(@Args('createProduct') input: CreateProductInput) {
    return this.productService.createProduct(input)
  }

  @Query(() => [Product], { name: 'productsByOrder' })
  findByOrder(
    @Args('orderBy') orderBy: string,
    @Args('orderParam') orderParam: string,
  ) {
    return this.productService.findByOrder(orderBy, orderParam)
  }

  @Query(() => [Product], { name: 'productsBySearch' })
  findBySearch(@Args('searchString') searchString: string) {
    return this.productService.findBySearch(searchString)
  }

  @Query(() => [Product], { name: 'productsForCart' })
  findProductsForCart(
    @Args({ name: 'ids', type: () => [String] }) ids: string[],
  ) {
    return this.productService.findProductsByIds(ids)
  }

  // @Query(() => [ProductEntity], { name: 'products' })
  // findAll() {
  //   return this.productService.findAll()
  // }
  //
  @Query(() => [Product], { name: 'productsByCategoryId' })
  findByCategoryId(
    @Args('categoryId') categoryId: string,
    @Args('sortBy') sortBy: string,
    @Args('sortParam') sortParam: string,
  ) {
    return this.productService.findByCategoryId(categoryId, sortBy, sortParam)
  }

  @Query(() => Product, { name: 'product' })
  findById(@Args('_id') _id: string) {
    return this.productService.findById(_id)
  }

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
