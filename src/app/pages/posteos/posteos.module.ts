import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosteosComponent } from './posteos.component';
import { PostComponent} from '../../components/post/post.component'
import { ModalPosteosComponent } from '../../components/modal-posteos/modal-posteos.component'
import { ComentarioComponent } from '../../components/comentario/comentario.component'


import { ComentariosComponent } from './comentarios/comentarios.component'
import { SharedModule } from '../shared.module';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

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
    ComentarioComponent,
    FilterPipe
  ],
  imports: [
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ], 
  entryComponents: [
    ModalPosteosComponent
  ]
})
export class PosteosModule { }
