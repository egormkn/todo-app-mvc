import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as compression from 'compression'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as nunjucks from 'nunjucks'
import * as path from 'path'
import { AppModule } from './app.module'

async function bootstrap () {
  dotenv.config()

  const server = express()

  nunjucks.configure('views', {
    autoescape: true,
    express: server
  })

  const app = await NestFactory.create(AppModule, server, {})

  app.setViewEngine('html')
  app.useStaticAssets(path.join(__dirname, '..', 'public'))
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'))
  app.use(compression())

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT)
}
bootstrap()
