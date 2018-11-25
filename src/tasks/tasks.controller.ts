import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Query, Render } from '@nestjs/common'
import { ListAddDto } from './dto/list.add.dto'
import { ListDeleteDto } from './dto/list.delete.dto'
import { ListUpdateDto } from './dto/list.update.dto'
import { TaskAddDto } from './dto/task.add.dto'
import { TaskDeleteDto } from './dto/task.delete.dto'
import { TaskUpdateDto } from './dto/task.update.dto'
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {

  constructor(private readonly taskService: TasksService) {}

  @Get()
  @Header('Cache-Control', 'no-cache, no-store')
  @Render('tasks')
  public async getLists(): Promise<object> {
    const lists = await this.taskService.getLists()
    return { lists }
  }

  @Get('/api')
  @Header('Cache-Control', 'no-cache, no-store')
  public async getListsApi(): Promise<object> {
    const lists = await this.taskService.getLists()
    return { lists }
  }

  @Post('list/add')
  @HttpCode(301)
  @Header('Location', '/tasks')
  public async addList(@Body() listAddDto: ListAddDto): Promise<object> {
    const { title } = listAddDto
    const list = await this.taskService.addList(title)
    return { list }
  }

  @Post('list/delete')
  @HttpCode(301)
  @Header('Location', '/tasks')
  public async deleteList(@Body() listDeleteDto: ListDeleteDto): Promise<object> {
    const { id } = listDeleteDto
    const list = await this.taskService.deleteList(id)
    return { list }
  }

  @Post('list/update')
  @HttpCode(301)
  @Header('Location', '/tasks')
  public async updateList(@Body() listUpdateDto: ListUpdateDto): Promise<object> {
    const { id, title } = listUpdateDto
    const list = await this.taskService.updateList(id, title)
    return { list }
  }

  @Post('task/add')
  @HttpCode(301)
  @Header('Location', '/tasks')
  public async addTask(@Body() taskAddDto: TaskAddDto): Promise<object> {
    const { title, description, list } = taskAddDto
    const task = await this.taskService.addTask(title, description, list)
    return { task }
  }

  @Post('task/delete')
  @HttpCode(301)
  @Header('Location', '/tasks')
  public async deleteTask(@Body() taskDeleteDto: TaskDeleteDto): Promise<object> {
    const { id } = taskDeleteDto
    const task = await this.taskService.deleteTask(id)
    return { task }
  }

  @Post('task/update')
  @HttpCode(301)
  @Header('Location', '/tasks')
  public async updateTask(@Body() taskUpdateDto: TaskUpdateDto): Promise<object> {
    const { id, title, description, isDone } = taskUpdateDto
    const task = await this.taskService.updateTask(id, title, description, isDone)
    // tslint:disable-next-line:no-console
    console.log(task)
    return { task }
  }
}
