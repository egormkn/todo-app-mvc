import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { List } from '../src/tasks/entities/list.entity'
import { Task } from '../src/tasks/entities/task.entity'
import { TasksService } from '../src/tasks/tasks.service'

describe('TasksService', () => {
  let service: TasksService

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

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useValue: mockTaskRepository
        },
        {
          provide: getRepositoryToken(List),
          useValue: mockListRepository
        }
      ]
    }).compile()

    service = module.get<TasksService>(TasksService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
