import { Component, Input } from '@angular/core';
import { ModalAlbumesComponent } from '../modal-albumes/modal-albumes.component'
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  @Input() album: any;
  title: string | undefined

  constructor(public dialog: MatDialog) {
   
  }
  

  openDialog(): void {
    this.dialog.open(ModalAlbumesComponent, {
      width: '70%',
      data: this.album
    });
  }

}
