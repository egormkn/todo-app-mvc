import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from '../src/app.controller'
import { AppService } from '../src/app.service'

describe('AppController', () => {
  let appController: AppController
  let appService: AppService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile()

    appService = module.get<AppService>(AppService)
    appController = module.get<AppController>(AppController)
  })

  describe('index', () => {
    it('should return string', async () => {
      jest.spyOn(appService, 'index').mockImplementation(() => 'test')

      expect(appController.index()).toEqual({ index: 'test' })
    })
  })
})
