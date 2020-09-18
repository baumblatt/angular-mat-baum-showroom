import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FruitsState } from '../../store/reducers/feature.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-juices',
  templateUrl: './juices.container.html',
  styleUrls: ['./juices.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JuicesContainer implements OnInit {

  constructor(private store: Store<FruitsState>) { }

  ngOnInit(): void {
  }

}
