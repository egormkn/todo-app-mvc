import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  public index(): string {
    return 'Hello World!'
  }
}
