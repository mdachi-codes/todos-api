import { Injectable, NotFoundException } from '@nestjs/common';
import {
  dbAddTodo,
  dbDeleteTodo,
  dbGetTodoById,
  dbGetTodos,
  dbUpdateTodo,
} from 'db';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  async addTodo(title: string, description: string): Promise<Todo> {
    var todo: Todo = { title: title, description: description };

    await dbAddTodo(todo);

    return todo;
  }

  async updateTodo(id: string, title: string, description: string) {
    var todo: Todo = { id: id, title: title, description: description };

    await dbUpdateTodo(id, todo);

    return todo;
  }

  async getTodos(): Promise<Todo[]> {
    return await dbGetTodos();
  }

  async getTodo(id: string): Promise<Todo> {
    var todo = await dbGetTodoById(id);

    if (!todo) {
      throw new NotFoundException('Could not find todo');
    }

    return todo;
  }

  async deleteTodo(id: string) {
    await dbDeleteTodo(id);

    return {
      message: `todo with id: ${id} deleted succesfully`,
    };
  }
}
