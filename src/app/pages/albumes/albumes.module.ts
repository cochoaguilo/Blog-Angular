import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { AlbumesComponent } from './albumes.component';
//import { AlbumComponent } from '../../components/album/album.component'
import { ModalAlbumesComponent } from '../../components/modal-albumes/modal-albumes.component'
import { FotosComponent } from './fotos/fotos.component'

//Material Ui
import {MatListModule} from '@angular/material/list'
import { MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from '../shared.module';


const routes: Routes = [
  {
    path: '',
    component: AlbumesComponent 
  },
  {
    path: ':id/fotos',
    component: FotosComponent
  }
];


@NgModule({
  declarations: [
    AlbumesComponent,
    FotosComponent,
    ModalAlbumesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatDialogModule,
    MatCardModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [
    ModalAlbumesComponent
  ]
})
export class AlbumesModule { }
