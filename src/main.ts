import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo/todo.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoModule);
  app.use((req, res, next) => {
    res.removeHeader('x-powered-by');
    res.removeHeader('date');
    next();
  });
  app.useGlobalPipes(new ValidationPipe()); // since i just have one route i want to validate it globally, could have been use on specific route
  await app.listen(3000);
}
bootstrap();
