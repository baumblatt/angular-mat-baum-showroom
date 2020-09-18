import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { fruitsReducers } from './store/reducers/feature.reducer';
import { EntryContainer } from './containers/entry/entry.container';
import { EffectsModule } from '@ngrx/effects';
import { JuiceEffects } from './store/effects/juice.effects';
import { CandiesEffects } from './store/effects/candies.effects';
import { JuicesContainer } from './containers/juices/juices.container';


@NgModule({
  declarations: [EntryContainer, JuicesContainer],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    StoreModule.forFeature('fruits', fruitsReducers),
    SharedModule,
    EffectsModule.forFeature([JuiceEffects, CandiesEffects])
  ]
})
export class FruitsModule { }
