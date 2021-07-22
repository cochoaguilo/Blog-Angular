import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {UserComponent} from '../../components/user/user.component'
import { ModalUserComponent } from '../../components/modal-user/modal-user.component'

import { UsuariosComponent } from './usuarios.component';
import { PostesbyusersComponent} from '../../components/postesbyusers/postesbyusers.component'
//Material Ui
import {MatListModule} from '@angular/material/list'
import { MatDialogModule} from '@angular/material/dialog';
import { UsuarioByAlbumComponent } from './usuario-by-album/usuario-by-album.component'

//import shared modules
import { SharedModule } from '../shared.module';
import { UserbyidComponent } from './userbyid/userbyid.component'


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
  }
];

@NgModule({
  entryComponents: [
    ModalUserComponent
  ],
  declarations: [
    UsuariosComponent,
    UserComponent,
    PostesbyusersComponent,
    ModalUserComponent,
    UsuarioByAlbumComponent,
    UserbyidComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatDialogModule
  ],
  exports: [
    RouterModule
  ],
  
})
export class UsuariosModule { }
