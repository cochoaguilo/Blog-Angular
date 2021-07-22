import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalUserComponent } from '../modal-user/modal-user.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: any;
  name: string | undefined

  constructor(public dialog: MatDialog) {
   
  }
  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalUserComponent, {
      width: '250px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
