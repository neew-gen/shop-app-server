import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'

import { AuthModule } from './auth/auth.module'
import { CategoryModule } from './category/category.module'
import { ProductModule } from './product/product.module'
import { SwipeModule } from './swipe/swipe.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/dist'),
    }),
    ProductModule,
    CategoryModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`,
      useNewUrlParser: true,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    SwipeModule,
    AuthModule,
  ],
})
export class AppModule {}
