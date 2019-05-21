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
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  todos: Todo[];
  doneTodos: Todo[];

  constructor(
    private bottomSheet: MatBottomSheet,
    private todoService: TodoService
    ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((res) => this.todos = res);
    this.todoService.getDoneTodos().subscribe((res) => this.doneTodos = res);
  }

  openBottomSheetAdd(): void {
    this.bottomSheet.open(AddTodoComponent);
  }

  openBottomSheetEdit(i: number, todo: Todo): void {
    this.bottomSheet.open(EditTodoComponent, {
      data: { index: i, todo: todo },
    });
  }

  markDone(i: number, todo: Todo): void {
    this.todoService.setDone(i, todo);
  }

  delete(i: number): void {
    this.todoService.deleteTodo(i);
  }
}
