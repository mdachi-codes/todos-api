import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from './todo.model';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async addTodo(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return await this.todosService.addTodo(title, description);
  }

  @Get()
  async getTodos(): Promise<Todo[]> {
    return await this.todosService.getTodos();
  }

  @Get(':id')
  async getTodo(@Param('id') todoId: string): Promise<Todo> {
    return await this.todosService.getTodo(todoId);
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
  ): Promise<Todo> {
    return await this.todosService.updateTodo(id, title, description);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    return await this.todosService.deleteTodo(id);
  }
}
