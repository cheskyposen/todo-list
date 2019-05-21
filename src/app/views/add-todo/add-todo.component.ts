import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
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
    this.todoService.setTodo(this.task, this.due);
    this.bottomSheetRef.dismiss();
  }
}
