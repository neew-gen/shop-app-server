import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { orderBy } from 'lodash'
import { ObjectID } from 'mongodb'
import { MongoRepository } from 'typeorm'

import { CreateProductInput } from './dto/create-product/create-product.input'
// import { UpdateProductInput } from './dto/update-product.input'
import { Product } from './entities/product.entity'
import { ProductData } from './entities/product-data.entity'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productMongoRepository: MongoRepository<Product>,
  ) {}
  createProduct(input: CreateProductInput) {
    const now = new Date()
    const product = {
      createdAt: now,
      updatedAt: now,
      amount: 0,
      likes: 0,
      ...input,
    }
    return this.productMongoRepository.save(product)
  }
  async findByOrder(orderBy, orderParam) {
    const orderObj = {}
    orderObj[orderBy] = orderParam
    // if (orderBy === 'productData.discount.percentage') {
    //   return this.productMongoRepository.find({
    //     where: {
    //       show: true,
    //       'productData.discount.percentage': { $exists: true },
    //     },
    //     order: orderObj,
    //   })
    // }
    return this.productMongoRepository.find({
      where: {
        show: true,
      },
      order: orderObj,
    })
  }
  async findBySearch(searchString) {
    // this.productMongoRepository
    //   .createCollectionIndex({
    //     'productData.name': 'text',
    //     'productData.description': 'text',
    //   })
    //   .then((res) => console.log(res))
    return this.productMongoRepository.find({
      where: {
        $or: [
          {
            'productData.name': { $regex: '^' + searchString },
          },
          {
            'productData.description': { $regex: '^' + searchString },
          },
        ],
      },
      // order: {
      //   score: 'ASC', // Sort by score in ASC order
      // },
      take: 5,
    })
  }

  async findProductsByIds(ids) {
    const _ids = ids.map((id) => ObjectID(id))
    return Promise.all(
      _ids.map((_id) => this.productMongoRepository.findOne({ _id })),
    )
  }
  //
  // findAll() {
  //   return this.productRepository.find()
  // }
  async findByCategoryId(categoryId, sortBy, sortParam) {
    const orderObj = {}
    orderObj[sortBy] = sortParam
    if (sortBy === 'productData.price') {
      const res = await this.productMongoRepository.find({
        where: {
          show: true,
          categoryId,
        },
        order: orderObj,
      })
      return ProductService.sortByPriceWithDiscount(res, sortParam)
    }
    // const res = await this.productMongoRepository
    //   .aggregate([
    //     {
    //       $set: {
    //         'productData.price': {
    //           $cond: {
    //             if: { 'productData.discount': { $ne: null } },
    //             then: 'productData.price',
    //             else: {
    //               $multiply: [
    //                 { $divide: ['productData.price', 100] },
    //                 { $subtract: [100, 'productData.discount.percentage'] },
    //               ],
    //             },
    //           },
    //         },
    //       },
    //     },
    //     // {
    //     //   $match: {
    //     //     show: true,
    //     //     categoryId,
    //     //   },
    //     // },
    //     // {
    //     //   $sort: {
    //     //     sortBy: 1,
    //     //   },
    //     // },
    //   ])
    //   .toArray()
    // console.log(res)
    return this.productMongoRepository.find({
      where: {
        show: true,
        categoryId,
      },
      order: orderObj,
    })
  }
  findById(id) {
    const _id = new ObjectID(id)
    return this.productMongoRepository.findOne({ _id })
  }
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
  private static sortByPriceWithDiscount(res, order): Product[] {
    // Because mongo can't work with dots in aggregate!!! I had to write this. Why I can't use dots notation, I don't understand...
    // TODO i think need to improve this...
    const idsWithCalculatedPrices = res.map((product) => {
      const { _id, productData } = product
      if (!productData.discount)
        return {
          _id,
          calculatedPrice: productData.price,
        }
      const calculatedPrice =
        (productData.price / 100) * (100 - productData.discount.percentage)
      return {
        _id,
        calculatedPrice,
      }
    })
    const sortedByCalculatedPrice = orderBy<{
      _id: string
      calculatedPrice: number
    }>(idsWithCalculatedPrices, ['calculatedPrice'], [order.toLowerCase()])
    return sortedByCalculatedPrice.map(
      (sortObj) => res.filter((resObj) => resObj._id === sortObj._id)[0],
    )
  }
}
