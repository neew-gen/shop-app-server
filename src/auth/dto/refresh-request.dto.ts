import { IsNotEmpty } from 'class-validator'

export class RefreshRequestDto {
  @IsNotEmpty()
  readonly refresh_token: string
}
