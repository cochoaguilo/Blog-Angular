import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-posteos',
  templateUrl: './modal-posteos.component.html',
  styleUrls: ['./modal-posteos.component.css'],
})
export class ModalPosteosComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalPosteosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router
  ) {}

  navigateTo(paths: string[]): void {
    this.dialogRef.close();
    this.route.navigate(paths);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
