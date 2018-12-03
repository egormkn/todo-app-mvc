import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from '../src/app.controller'
import { AppService } from '../src/app.service'

// https://docs.nestjs.com/fundamentals/unit-testing

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile()
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController)
      expect(appController.index()).toBe('Hello World!')
    })
  })
})
