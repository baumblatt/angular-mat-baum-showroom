import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-candies-detail',
  templateUrl: './candies-detail.bottom-sheet.html',
  styleUrls: ['./candies-detail.bottom-sheet.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandiesDetailBottomSheet implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<CandiesDetailBottomSheet>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close(): void {
    this.bottomSheetRef.dismiss();
  }
}
