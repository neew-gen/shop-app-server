import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { CategoryService } from './category.service'
import { Category } from './entities/category.entity'
import { CategoryInput } from './dto/create-category.input'
import { UpdateCategoryInput } from './dto/update-category.input'

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(@Args('category') categoryInput: CategoryInput) {
    return this.categoryService.create(categoryInput)
  }

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    console.log('findAll')
    return this.categoryService.findAll()
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('id', { type: () => String }) id: string) {
    console.log('findOne')
    return this.categoryService.findOne(id)
  }

  @Mutation(() => Category)
  updateCategory(
    @Args('id') id: string,
    @Args('category') updateCategoryInput: UpdateCategoryInput,
  ) {
    console.log('update')
    return this.categoryService.update(id, updateCategoryInput)
  }
  // @Mutation(() => Category)
  // removeCategory(@Args('id', { type: () => Int }) id: number) {
  //   return this.categoryService.remove(id)
  // }
}
