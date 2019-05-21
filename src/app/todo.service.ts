import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  doneTodos: Todo[] = [];

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  getDoneTodos(): Observable<Todo[]> {
    return of(this.doneTodos);
  }

  setTodo(task: string, dueDate: any): void {
    this.todos.push(new Todo(task, dueDate));
  }

  setDone(i: number, todo: Todo): void {
    this.todos.splice(i, 1);
    this.doneTodos.push(todo);
  }

  deleteTodo(i: number): void {
    this.doneTodos.splice(i, 1);
  }

  editTodo(i: number, todo: Todo): void {
    this.todos.splice(i, 1, todo);
  }
}
