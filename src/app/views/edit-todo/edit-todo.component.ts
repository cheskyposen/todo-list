import { Component, Inject } from '@angular/core';
import { Todo } from 'src/app/todo';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html'
})
export class EditTodoComponent {
  todo: Todo;
  constructor(
    public bottomSheetRef: MatBottomSheetRef<EditTodoComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Todo
  ) {
      this.todo = data;
   }
}
