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

  // @Query(() => [ProductModelGraphql], { name: 'product' })
  // findByCategory(@Args('category') category: string) {
  //   return this.productService.findByCategory(category)
  // }
  @Query(() => ProductEntity, { name: 'product' })
  findOne(@Args('id', { type: () => String }) id: string) {
    console.log('findOne')
    return this.productService.findOne(id)
  }

  @Mutation(() => ProductEntity)
  createProduct(@Args('product') productInput: ProductInput) {
    console.log('create')
    return this.productService.create(productInput)
  }

  @Mutation(() => ProductEntity)
  updateProduct(
    @Args('id') id: string,
    @Args('product') updateProductInput: UpdateProductInput,
  ) {
    console.log('update')
    return this.productService.update(id, updateProductInput)
  }

  @Mutation(() => ProductEntity)
  deleteProduct(@Args('id') id: string) {
    console.log('delete')
    return this.productService.delete(id)
  }
}
