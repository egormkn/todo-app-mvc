import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { List } from './entities/list.entity'
import { Task } from './entities/task.entity'

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(List)
    private readonly listRepository: Repository<List>
  ) {}

  public async getLists(): Promise<List[]> {
    const lists = await this.listRepository.find({ relations: ['tasks'] })
    lists.forEach(list => {
      list.tasks.sort((a, b) => a.id - b.id)
    })
    return lists
  }

  public async addList(title: string): Promise<List> {
    const list = new List()
    list.title = title
    list.tasks = []
    return this.listRepository.save(list)
  }

  public async deleteList(id: number): Promise<any> {
    return this.listRepository.delete(id)
  }

  public async updateList(id: number, title: string): Promise<any> {
    return this.listRepository.update(id, { title })
  }

  public async addTask(title: string, description: string, listId: number): Promise<List> {
    const task = new Task()
    task.title = title
    task.description = description
    task.isDone = false
    const list = await this.listRepository.findOneOrFail(listId, {
      relations: ['tasks']
    })
    list.tasks.push(task)
    return this.listRepository.save(list)
  }

  public async deleteTask(id: number): Promise<any> {
    return this.taskRepository.delete(id)
  }

  public async updateTask(id: number, title: string, description: string, isDone: boolean): Promise<any> {
    /*const task = await this.taskRepository.findOneOrFail(id, {
      relations: ['list']
    })
    task.title = title
    task.description = description
    task.isDone = isDone
    // tslint:disable-next-line:no-console
    console.log(task)
    return this.taskRepository.save(task)
    // */
    return this.taskRepository.update(id, { title, description, isDone })
  }
}
