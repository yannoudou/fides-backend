import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodosService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';

@Module({
  controllers: [TodoController],

  // can be use as dependencing for other classes
  // now that we register them they can be use as depencing,
  // the Di will create instance of them and passt them down to the controller
  providers: [TodosService],

  exports: [], // make them acessiblt to other module other than to

  // imports: [], // for external module you want to import on this module
  imports: [TypeOrmModule.forFeature([Todo])],
})
export class TodoModule {}
