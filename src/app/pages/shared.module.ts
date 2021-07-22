import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from '../components/album/album.component'
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    AlbumComponent,
    MatButtonModule
  ]
})
export class SharedModule { }
