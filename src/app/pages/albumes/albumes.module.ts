import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumesComponent } from './albumes.component';
import { ModalAlbumesComponent } from '../../components/modal-albumes/modal-albumes.component';
import { FotosComponent } from './fotos/fotos.component';

//Material Ui
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from '../shared.module';
import { CardComponent } from 'src/app/components/card/card.component';

//scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


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
    ModalAlbumesComponent,
    CardComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forChild(routes),
    MatCardModule,
    SharedModule,
    InfiniteScrollModule
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [
    ModalAlbumesComponent
  ]
})
export class AlbumesModule { }
