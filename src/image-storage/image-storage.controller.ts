import { Body, Controller, Post } from '@nestjs/common'

import { UploadRequestDto } from './dto/upload-request.dto'
import { ImageStorageService } from './image-storage.service'

@Controller('/api/images')
export class ImageStorageController {
  constructor(private imageStorageService: ImageStorageService) {}
  @Post('/upload')
  public async uploadImage(@Body() body: UploadRequestDto) {
    this.imageStorageService.uploadToBucket(body.image)
  }
}
