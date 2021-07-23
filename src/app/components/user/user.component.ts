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
    this.dialog.open(ModalUserComponent, {
      width: '70%',
      data: this.user
    });
  }
}
