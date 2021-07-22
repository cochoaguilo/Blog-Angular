import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common'
import { PosteosComponent } from './posteos.component';
import { PostComponent} from '../../components/post/post.component'
import { ModalPosteosComponent } from '../../components/modal-posteos/modal-posteos.component'
import { ComentarioComponent } from '../../components/comentario/comentario.component'

//Material Ui
import {MatListModule} from '@angular/material/list'
import { MatDialogModule} from '@angular/material/dialog';
import { ComentariosComponent } from './comentarios/comentarios.component'
import { SharedModule } from '../shared.module';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: PosteosComponent 
  },
  {
    path: ':id/comentarios',
    component: ComentariosComponent
  }
];

@NgModule({
  declarations: [
    PosteosComponent,
    PostComponent, 
    ModalPosteosComponent, 
    ComentariosComponent,
    ComentarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ], 
  entryComponents: [
    ModalPosteosComponent
  ]
})
export class PosteosModule { }
