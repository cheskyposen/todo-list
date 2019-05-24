import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasksTodo: Todo[] = [];
  tasksDone: Todo[] = [];

  constructor() { }

  getTasksTodo(): Observable<Todo[]> {
    return of(this.tasksTodo);
  }

  getTasksDone(): Observable<Todo[]> {
    return of(this.tasksDone);
  }

  setTask(task: string, dueDate: any): void {
    this.tasksTodo.push(new Todo(task, dueDate));
  }

  setTaskDone(i: number, todo: Todo): void {
    this.tasksTodo.splice(i, 1);
    this.tasksDone.push(todo);
  }

  deleteTodo(i: number): void {
    this.tasksDone.splice(i, 1);
  }

  setTaskUndone(i: number, todo: Todo): void {
    this.tasksDone.splice(i, 1);
    this.tasksTodo.push(todo);
  }
}
