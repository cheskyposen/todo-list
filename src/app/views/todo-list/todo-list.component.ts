import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasksTodo: Todo[];
  tasksDone: Todo[];

  constructor(
    private bottomSheet: MatBottomSheet,
    private todoService: TodoService
    ) { }

  ngOnInit() {
    this.todoService.getTasksTodo().subscribe((res) => this.tasksTodo = res);
    this.todoService.getTasksDone().subscribe((res) => this.tasksDone = res);
  }

  openBottomSheetAdd(): void {
    this.bottomSheet.open(AddTodoComponent);
  }

  openBottomSheetEdit(todo: Todo): void {
    this.bottomSheet.open(EditTodoComponent, {
      data: todo,
    });
  }

  markDone(i: number, todo: Todo): void {
    this.todoService.setTaskDone(i, todo);
  }

  delete(i: number): void {
    this.todoService.deleteTodo(i);
  }

  undo(i: number, todo: Todo): void {
    this.todoService.setTaskUndone(i, todo);
  }
}
