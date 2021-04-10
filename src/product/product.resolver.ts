import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProductService } from './product.service'
import { ProductEntity } from './entities/product.entity'
import { ProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'

@Resolver(() => ProductEntity)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [ProductEntity], { name: 'products' })
  findAll() {
    return this.productService.findAll()
  }

  @Query(() => ProductEntity, { name: 'product' })
  findOne(@Args('id') id: string) {
    return this.productService.findOne(id)
  }

  @Query(() => [ProductEntity], { name: 'productsByCategoryId' })
  findByCategoryId(@Args('categoryId') categoryId: string) {
    return this.productService.findByCategoryId(categoryId)
  }

  @Mutation(() => ProductEntity)
  createProduct(@Args('product') productInput: ProductInput) {
    return this.productService.create(productInput)
  }

  @Mutation(() => ProductEntity)
  updateProduct(
    @Args('id') id: string,
    @Args('product') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.update(id, updateProductInput)
  }

  @Mutation(() => ProductEntity)
  deleteProduct(@Args('id') id: string) {
    return this.productService.delete(id)
  }
}
