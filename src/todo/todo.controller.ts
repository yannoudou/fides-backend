import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateANeWDoto } from './dtos/create-todo.dto';
import { TodosService } from './todo.service';

// an controller only consume class
@Controller('todo')
export class TodoController {
  constructor(public TodosService: TodosService) {}

  // @Get() //
  // listTodos() {
  //   return this.TodosService.findAll();
  // }

  @Post()
  createTodo(@Body() body: CreateANeWDoto) {
    // --> tell nest js using decorator to pass the body down to the route as parameter
    return this.TodosService.create(body.value);
  }

  @Get('/:id')
  async getTodo(@Param('id') id: string) {
    // --> tell nest js i want you to get id from the request parameters
    const todo = await this.TodosService.findOne(parseInt(id));
    if (!id) {
      throw new NotFoundException('todo not found');
    }
  }
}
