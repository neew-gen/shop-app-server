import { IsNotEmpty } from 'class-validator'

export class RegisterRequestDto {
  @IsNotEmpty()
  readonly username: string

  @IsNotEmpty()
  readonly password: string

  @IsNotEmpty()
  readonly name: string
}
