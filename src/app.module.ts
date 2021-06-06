import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'
// import * as admin from 'firebase-admin'
import { join } from 'path'

// import firebaseKey from '../firebase-key.json'
import { AuthModule } from './auth/auth.module'
import { CategoryModule } from './category/category.module'
// import { ImageStorageModule } from './image-storage/image-storage.module'
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
    // FirebaseAdminModule.forRootAsync({
    //   useFactory: () => ({
    //     credential: admin.credential.cert({
    //       projectId: 'shop-app-228',
    //       clientEmail:
    //         'firebase-adminsdk-r3krw@shop-app-228.iam.gserviceaccount.com',
    //       privateKey:
    //         '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC83HHujovH1k8E\nDUyv3mw2puumBTC/ArBeuG6lEIsFchyLHFnyJSBRp0F+XrBj9GETvdYrbG4DKVzT\nAP7EIl1cnfqxuPMFeH9m+yX/hV8pgD+6IAUotjyvg2d2GeVwZWUiRqzy3F7+dfMp\nous75WDbQ8iVGodWwdU5u3uGEcUEf2pYc2/FRjzsO2YgAM/DSvdBFIIu2TJVkb7g\nJvkdTIeZIJKA31xcf8aQAvoDjlj9Zc7G7upsR7bNmsb7JIhrtL+Q5c3LhCbAjkwC\nEBZDy/j4PsrbMrK5mF/zKyF5gJE4YgQU8npypmF+lU7f7n/7cUTBuXjVCdH4h4Sq\ngTllvxK3AgMBAAECggEAXB9NhbdLcIlVVp0kJH8ims/2Dy/l9K4bmMBu3B5DKb9d\nM+/64dYBO0MR+9G1SbRZK/eEAf9sdCdXa2dHXiWDE9vNfqZACJGb14A3KzoDzqsL\nqr7WtWKbHGPE8kM0ewxCdiMyVm5u+cFQAKXDB57eDWY1b6GWlZeL6hLM8Hs3dnbX\nxjz85aHVJ7vGkArqXr/17LifAw2J5bFTfqJl4zxm2aKLzusixdmE7R4yi20LG6aR\nuUkyG3FKyGGOdCNYiyFnDxx/p3xB4DxovZzO1DFk3XZmWBTl02VTWunq83bVoWqB\nQ7kgetHY4yLGkMvBkHCihVMVjdropsaE75rY52vHNQKBgQDch5hmDgWGpl1CpBGH\n4Ek5GPQwbu+NNVi/q7nQ1HBzvjPMYXyLV9FxkEGhORe3Y32klRVOquCtGzXT+rJU\npzmH/sjje6eIJ8R45gVhBJ1X6Due111/wuvGtDFhbw5PzVSgfl5L2hGPViNdsWrM\n8IrYDv08cYbnsCzGhWcli1Uf8wKBgQDbPOIbqT2fYIwhAtT1chj0/KpuA1IbhjZi\nfnNPukO43dEQ9HNqcjvhr1ELIYoEx8ar+9PrZCkc+ZyovJxeGkn1II2bjE/YfNiA\n9TriqTIvLha8wxrqJKz8KRlkMUV+SjzmWu1Xy1aYmH1VArD9kZZY+4QxI0U7gvwR\npAdMZHf3LQKBgQC5Q8y7B9KKoR6+CnmTzc+WASm7uqbS2Vs6grjzAFWMVuDLNabc\npSUWI5uPJxiOfy2hY4Fn+lQP+UkKUZUZWvcREfGQcmR3FPmQm6UvMSJCJJ5ZvhIV\ncBqFbwIBGbxLPHN49VCgpo2T/khtwMu5aecqxcTmz3UHFVE4YgAaYWhdEwKBgEwA\nNCYAqnMYphs/fxHDRvGOsYpHrmwKP8ovKcxGtvlcNACbrXMGPMoE26RvMQhtNOsj\n9pgQdcwsn+lC0TYyCNdoPI7iuj9DME6sNIikvNfsM0emnyryIeGcYcgA6KVaGPiG\nJucbf16Q5knVEAQnNyaLsozSPErgIn//C+Soo4nVAoGBAJBd7CWDNlmE/Ox9q9HH\niQmsOKAqnACnodGPdhLpcbotefKQoCKfVsda35M31aDMIg8W1Y1egU5Ulgu2xRZZ\nqimGqdvdtgM5jIn/yWXY4Zxcf6pHcHunkJHlqkc+NhuTErCxM3j6Lfsy4xZijMBp\nnsN9407fZwIv+cdckJpv1ZO3\n-----END PRIVATE KEY-----\n',
    //     }),
    //     databaseURL: 'https://shop-app-228-default-rtdb.firebaseio.com',
    //   }),
    // }),
    // ImageStorageModule,
  ],
})
export class AppModule {}
