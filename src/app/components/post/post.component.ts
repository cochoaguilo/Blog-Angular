import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalPosteosComponent } from '../modal-posteos/modal-posteos.component'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post: any;
  title: string | undefined

  constructor(public dialog: MatDialog) {
   
  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalPosteosComponent, {
      width: '250px',
      data: this.post
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
