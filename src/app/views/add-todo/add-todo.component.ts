import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html'
})
export class AddTodoComponent implements OnInit {
  task: string;
  due: any;
  constructor(
    private bottomSheetRef: MatBottomSheetRef<AddTodoComponent>,
    private todoService: TodoService,
    ) {}

  ngOnInit() {
  }

  addTodo() {
    this.todoService.setTask(this.task, this.due);
    this.bottomSheetRef.dismiss();
  }
}
