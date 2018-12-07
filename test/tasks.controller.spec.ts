import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm'
import { List } from '../src/tasks/entities/list.entity'
import { Task } from '../src/tasks/entities/task.entity'
import { TasksController } from '../src/tasks/tasks.controller'
import { TasksService } from '../src/tasks/tasks.service'
import { mockListRepository } from './mocks/list.repository'
import { mockTaskRepository } from './mocks/task.repository'

describe('TasksController', () => {
  let tasksController: TasksController
  let tasksService: TasksService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService]
    })
    .overrideProvider(getRepositoryToken(Task))
    .useValue(mockTaskRepository)
    .overrideProvider(getRepositoryToken(List))
    .useValue(mockListRepository)
    .compile()

    tasksService = module.get<TasksService>(TasksService)
    tasksController = module.get<TasksController>(TasksController)
  })

  it('should be defined', () => {
    expect(tasksController).toBeDefined()
  })

  describe('getLists', () => {
    it('should return string', async () => {
      jest.spyOn(tasksService, 'getLists').mockImplementation(async () => [])

      expect(await tasksController.getLists()).toEqual({ lists: [] })
    })
  })
})
