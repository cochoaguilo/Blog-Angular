import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Shared Components
import { AlbumComponent } from '../components/album/album.component'
import { TodoComponent } from '../components/todo/todo.component';
import { ModalTodoComponent } from '../components/modal-todo/modal-todo.component';

//Material UI
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  entryComponents: [
    ModalTodoComponent
  ],
  declarations: [
    AlbumComponent,
    TodoComponent,
    ModalTodoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    AlbumComponent,
    TodoComponent,
    ModalTodoComponent,
    MatButtonModule,
    MatDialogModule,
    MatListModule
  ]
})
export class SharedModule { }
