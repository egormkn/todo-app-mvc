import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { List } from './entities/list.entity'
import { Task } from './entities/task.entity'
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

describe('TasksService', () => {
  let tasksService: TasksService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService]
    })
    .overrideProvider(getRepositoryToken(Task))
    .useValue(mockTaskRepository)
    .overrideProvider(getRepositoryToken(List))
    .useValue(mockListRepository)
    .compile()

    tasksService = module.get<TasksService>(TasksService)
  })

  it('should be defined', () => {
    expect(tasksService).toBeDefined()
  })
})
