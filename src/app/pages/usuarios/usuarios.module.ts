import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from '../../components/user/user.component'
import { ModalUserComponent } from '../../components/modal-user/modal-user.component'

import { UsuariosComponent } from './usuarios.component';
import { PostesbyusersComponent} from '../../components/postesbyusers/postesbyusers.component'

import { UsuarioByAlbumComponent } from './usuario-by-album/usuario-by-album.component'

//import shared modules
import { SharedModule } from '../shared.module';


import { UserbyidComponent } from './userbyid/userbyid.component';
import { TodosByUserComponent } from './todosbyuser/todosbyuser.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent 
  },
  {
    path: ':id',
    component: UserbyidComponent
  },
  {
    path: ':id/posteos',
    component: PostesbyusersComponent
  },
  {
    path: ':id/albumes',
    component: UsuarioByAlbumComponent
  },
  {
    path: ':id/todos',
    component: TodosByUserComponent
  }
];

@NgModule({
  entryComponents: [
    ModalUserComponent,
  ],
  declarations: [
    UsuariosComponent,
    UserComponent,
    PostesbyusersComponent,
    ModalUserComponent,
    UsuarioByAlbumComponent,
    UserbyidComponent,
    TodosByUserComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  
})
export class UsuariosModule { }
