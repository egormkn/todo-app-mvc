import { List } from '../../src/tasks/entities/list.entity'

const mockList = new List()

export const mockListRepository = {
  find: async () => [mockList],
  findOne: async () => mockList,
  save: async () => mockList
}
