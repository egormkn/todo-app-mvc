import { Controller, Get, Header, HttpCode, Render } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor (private readonly appService: AppService) {}

  @Get()
  @HttpCode(301)
  @Header('Location', '/tasks')
  public index(): object {
    return {
      index: this.appService.index()
    }
  }
}
