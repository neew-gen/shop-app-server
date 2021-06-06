import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'

import { RolesGuard } from '../auth/roles/roles.guard'
import { Product } from './entities/product.entity'
import { ProductResolver } from './product.resolver'
import { ProductService } from './product.service'

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [
    ProductResolver,
    ProductService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class ProductModule {}
