import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductResolver } from './product.resolver'
import { ProductModel } from './entity/product.model'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel])],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
