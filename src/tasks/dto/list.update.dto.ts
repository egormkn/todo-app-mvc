import { Transform } from 'class-transformer'
import { IsInt, IsString, MaxLength } from 'class-validator'

export class ListUpdateDto {

  @Transform(parseInt)
  @IsInt()
  public readonly id: number

  @IsString()
  @MaxLength(255)
  public readonly title: string
}
