import { Module } from '@nestjs/common'
// import { AppController } from './app.controller'
// import { AppService } from './app.service'
import { ProductModule } from './product/product.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryModule } from './category/category.module'
import { SwipeModule } from './swipe/swipe.module'
import { ServeStaticModule } from '@nestjs/serve-static' // New
import { join } from 'path'
import { AuthModule } from './auth/auth.module'

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
  // providers: [AppService],
})
export class AppModule {}
