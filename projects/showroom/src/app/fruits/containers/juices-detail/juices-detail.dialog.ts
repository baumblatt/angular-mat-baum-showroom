import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-juices-detail',
  templateUrl: './juices-detail.dialog.html',
  styleUrls: ['./juices-detail.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JuicesDetailDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<JuicesDetailDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }
}
