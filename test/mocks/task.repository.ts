import { Task } from '../../src/tasks/entities/task.entity'

const mockTask = new Task()

export const mockTaskRepository = {
  find: async () => [mockTask],
  findOne: async () => mockTask,
  save: async () => mockTask
}
