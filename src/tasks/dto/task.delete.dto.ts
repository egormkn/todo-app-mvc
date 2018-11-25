import { Transform } from 'class-transformer'
import { IsInt } from 'class-validator'

export class TaskDeleteDto {

  @Transform(parseInt)
  @IsInt()
  public readonly id: number
}
