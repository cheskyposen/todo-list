import { Component, OnInit, Inject } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html'
})
export class EditTodoComponent implements OnInit {
  todo: Todo;
  index: number;
  constructor(
    private bottomSheetRef: MatBottomSheetRef<EditTodoComponent>,
    private todoService: TodoService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
      this.index = data.index;
      this.todo = data.todo;
   }

  ngOnInit() {
  }

  editTodo() {
    this.todoService.editTodo(this.index, this.todo);
    this.bottomSheetRef.dismiss();
  }
}
