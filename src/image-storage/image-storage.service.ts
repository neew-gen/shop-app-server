import { FirebaseStorageService } from '@aginix/nestjs-firebase-admin'
import { Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class ImageStorageService {
  constructor(private firebaseStorage: FirebaseStorageService) {}

  bucket() {
    return this.firebaseStorage.bucket('gs://shop-app-228.appspot.com/')
  }

  uploadToBucket(image) {
    // const data = image.split(',')[1]
    // const buffer: Buffer = Buffer.from(image.data, 'utf-8')
    // console.log(image)
    const buffer: Buffer = image.data
    const uuid = uuidv4()
    const file = this.bucket().file(`product-images/${uuid}`)
    file.save(buffer, { contentType: 'image/jpeg' })
    // return this.firebaseAuth.listUsers()
  }
}
