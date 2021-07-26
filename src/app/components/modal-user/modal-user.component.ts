import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent {

  
  
  constructor(
    public dialogRef: MatDialogRef<ModalUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private route: Router) {}

  navigateTo(paths: string[]): void{
    console.log(paths);
    this.dialogRef.close();
    this.route.navigate(paths);
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
