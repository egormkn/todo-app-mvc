import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { List } from './entities/list.entity'
import { Task } from './entities/task.entity'
import { TasksController } from './tasks.controller'
import { TasksService } from './tasks.service'

@Module({
  imports: [TypeOrmModule.forFeature([Task, List])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
