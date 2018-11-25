import { Test, TestingModule } from '@nestjs/testing'
import { TasksService } from '../src/tasks/tasks.service'

describe('TasksService', () => {
  let service: TasksService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService]
    }).compile()
    service = module.get<TasksService>(TasksService)
  })
  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
