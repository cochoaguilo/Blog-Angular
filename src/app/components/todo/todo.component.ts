import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalTodoComponent } from '../modal-todo/modal-todo.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: any;

  constructor(public dialog: MatDialog) {
   
  }
  

  openDialog(): void {
    this.dialog.open(ModalTodoComponent, {
      width: '250px',
      data: this.todo
    });
  }
}
