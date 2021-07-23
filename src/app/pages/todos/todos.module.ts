import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component'
import { FormsModule } from '@angular/forms';
import { FilterByIdPipe } from 'src/app/pipes/filter-by-id.pipe';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent 
  }
];


@NgModule({
  declarations: [
    TodosComponent,
    FilterByIdPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ]
})
export class TodosModule { }
