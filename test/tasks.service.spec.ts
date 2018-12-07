import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { List } from '../src/tasks/entities/list.entity'
import { Task } from '../src/tasks/entities/task.entity'
import { TasksService } from '../src/tasks/tasks.service'
import { mockListRepository } from './mocks/list.repository'
import { mockTaskRepository } from './mocks/task.repository'

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
