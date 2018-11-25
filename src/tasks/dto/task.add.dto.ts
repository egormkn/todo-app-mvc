import { Transform } from 'class-transformer'
import { IsInt, IsString, MaxLength } from 'class-validator'

export class TaskAddDto {

  @IsString()
  @MaxLength(255)
  public readonly title: string

  @IsString()
  public readonly description: string

  @Transform(parseInt)
  @IsInt()
  public readonly list: number
}
