import { Transform } from 'class-transformer'
import { IsInt } from 'class-validator'

export class ListDeleteDto {

  @Transform(parseInt)
  @IsInt()
  public readonly id: number
}
