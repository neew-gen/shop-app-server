import { NestFactory } from '@nestjs/core'
import { json, urlencoded } from 'express'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // app.enableCors({ credentials: true, origin: 'http://localhost:8080' })
  app.enableCors()
  app.use(json({ limit: '50mb' }))
  app.use(urlencoded({ extended: true, limit: '50mb' }))
  await app.listen(process.env.PORT || 3000)
}
bootstrap()
