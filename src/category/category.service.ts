import { Injectable } from '@nestjs/common'
import { CategoryInput } from './dto/create-category.input'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { Category } from './entities/category.entity'
import { UpdateCategoryInput } from './dto/update-category.input'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: MongoRepository<Category>,
  ) {}
  create(categoryInput: CategoryInput) {
    return this.categoryRepository.save(categoryInput)
  }

  findAll() {
    return this.categoryRepository.find()
  }

  findPublic() {
    return this.categoryRepository.find({
      where: {
        isPublic: true,
      },
    })
  }

  findOne(id: string) {
    return this.categoryRepository.findOne({ id: id })
  }

  update(id: string, updateCategoryInput: UpdateCategoryInput) {
    return this.categoryRepository.updateOne(
      {
        id: id,
      },
      {
        $set: updateCategoryInput,
      },
    )
  }

  delete(id: string) {
    return this.categoryRepository.deleteOne({
      id: id,
    })
  }
}
