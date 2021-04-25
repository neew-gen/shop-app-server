import { IsNotEmpty } from 'class-validator'

export class LoginRequestDto {
  @IsNotEmpty()
  readonly username: string

  @IsNotEmpty()
  readonly password: string
}
