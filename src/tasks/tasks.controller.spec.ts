import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm'
import { List } from './entities/list.entity'
import { Task } from './entities/task.entity'
import { TasksController } from './tasks.controller'
import { TasksService } from './tasks.service'

const mockList = new List()

export const mockListRepository = {
  find: async () => [mockList],
  findOne: async () => mockList,
  save: async () => mockList
}

const mockTask = new Task()

export const mockTaskRepository = {
  find: async () => [mockTask],
  findOne: async () => mockTask,
  save: async () => mockTask
}

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
