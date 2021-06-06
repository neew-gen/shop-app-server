import { Module } from '@nestjs/common'

import { ImageStorageController } from './image-storage.controller'
import { ImageStorageService } from './image-storage.service'

@Module({
  // imports: [UserModule, PassportModule, JwtModule.register({}), TokenModule],
  providers: [ImageStorageService],
  controllers: [ImageStorageController],
  // exports: [ImageStorageService],
})
export class ImageStorageModule {}
