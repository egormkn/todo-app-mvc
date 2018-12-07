import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { List } from '../src/tasks/entities/list.entity'
import { Task } from '../src/tasks/entities/task.entity'
import { TasksController } from '../src/tasks/tasks.controller'
import { TasksService } from '../src/tasks/tasks.service'

describe('TasksController', () => {
  let tasksController: TasksController
  let tasksService: TasksService

  const mockTask = new Task()

  const mockTaskRepository = {
    find: async () => [mockTask],
    findOne: async () => mockTask,
    save: async () => mockTask
  }

  const mockList = new List()

  const mockListRepository = {
    find: async () => [mockList],
    findOne: async () => mockList,
    save: async () => mockList
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: getRepositoryToken(Task),
          useValue: mockTaskRepository
        },
        {
          provide: getRepositoryToken(List),
          useValue: mockListRepository
        },
        TasksService
      ]
    }).compile()

    tasksService = module.get<TasksService>(TasksService)
    tasksController = module.get<TasksController>(TasksController)
  })

  it('should be defined', () => {
    expect(tasksController).toBeDefined()
  })

  describe('index', () => {
    it('should return string', async () => {
      jest.spyOn(tasksService, 'getLists').mockImplementation(async () => [])

      expect(await tasksController.getLists()).toEqual({ lists: [] })
    })
  })
})
