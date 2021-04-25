import { IsNotEmpty } from 'class-validator'

export class RefreshRequestDto {
  @IsNotEmpty()
  readonly refreshToken: string
}
