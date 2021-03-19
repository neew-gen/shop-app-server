import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ProductService } from './product.service'
import { ProductModel } from './entity/product.model'
import { ProductInput } from './entity/create-product.input'
// import { UpdateProductInput } from './dto/update-product.input'

@Resolver(() => ProductModel)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}
  @Query(() => [ProductModel], { name: 'product' })
  findByCategory(@Args('category') category: string) {
    return this.productService.findByCategory(category)
  }
  // @Query(() => Product, { name: 'product' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.productService.findOne(id)
  // }
  @Mutation(() => ProductModel)
  createProduct(@Args('product') productInput: ProductInput) {
    console.log(productInput)
    return this.productService.create(productInput)
  }
  // @Mutation(() => Product)
  // updateProduct(
  //   @Args('updateProductInput') updateProductInput: UpdateProductInput,
  // ) {
  //   return this.productService.update(updateProductInput.id, updateProductInput)
  // }
  //
  // @Mutation(() => Product)
  // removeProduct(@Args('id', { type: () => Int }) id: number) {
  //   return this.productService.remove(id)
  // }
}
