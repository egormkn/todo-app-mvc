import { IsString, MaxLength } from 'class-validator'

export class ListAddDto {

  @IsString()
  @MaxLength(255)
  public readonly title: string
}
