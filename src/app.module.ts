import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TasksModule } from './tasks/tasks.module'

dotenv.config()

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true,
      logging: false,
      entities: [
        __dirname + '/**/*.entity.{ts,js}'
      ],
      migrations: [
        __dirname + '/**/*.migration.{ts,js}'
      ],
      subscribers: [
        __dirname + '/**/*.subscriber.{ts,js}'
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
