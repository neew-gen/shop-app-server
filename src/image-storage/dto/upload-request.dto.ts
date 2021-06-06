import { IsNotEmpty } from 'class-validator'

export class UploadRequestDto {
  @IsNotEmpty()
  readonly image: any
}
