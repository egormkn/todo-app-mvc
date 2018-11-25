import { Transform } from 'class-transformer'
import { IsBoolean, IsInt, IsOptional, IsString, MaxLength } from 'class-validator'

export class TaskUpdateDto {

  @Transform(parseInt)
  @IsInt()
  public readonly id: number

  @IsString()
  @MaxLength(255)
  public readonly title: string

  @IsString()
  public readonly description: string

  @Transform(value => value === 'true')
  @IsBoolean()
  public readonly isDone: boolean
}
