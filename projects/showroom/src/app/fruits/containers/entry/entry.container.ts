import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FruitsState } from '../../store/reducers/feature.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.container.html',
  styleUrls: ['./entry.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryContainer implements OnInit {

  constructor(private store: Store<FruitsState>) { }

  ngOnInit(): void {
  }

}
