import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FruitsState } from '../../store/reducers/feature.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-candies',
  templateUrl: './candies.container.html',
  styleUrls: ['./candies.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandiesContainer implements OnInit {

  constructor(private store: Store<FruitsState>) { }

  ngOnInit(): void {
  }

}
