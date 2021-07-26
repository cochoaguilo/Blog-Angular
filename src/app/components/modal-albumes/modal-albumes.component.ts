import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-albumes',
  templateUrl: './modal-albumes.component.html',
  styleUrls: ['./modal-albumes.component.css'],
})
export class ModalAlbumesComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalAlbumesComponent>,
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
