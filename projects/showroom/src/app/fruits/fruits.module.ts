import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { fruitsReducers } from './store/reducers/feature.reducer';
import { EntryContainer } from './containers/entry/entry.container';
import { EffectsModule } from '@ngrx/effects';
import { JuicesEffects } from './store/effects/juices.effects';
import { CandiesEffects } from './store/effects/candies.effects';
import { JuicesContainer } from './containers/juices/juices.container';
import { CandiesContainer } from './containers/candies/candies.container';
import { JuicesDetailDialog } from './containers/juices-detail/juices-detail.dialog';
import { CandiesDetailBottomSheet } from './containers/candies-detail/candies-detail.bottom-sheet';


@NgModule({
  declarations: [EntryContainer, JuicesContainer, CandiesContainer, JuicesDetailDialog, CandiesDetailBottomSheet],
  imports: [
    CommonModule,
    FruitsRoutingModule,
    StoreModule.forFeature('fruits', fruitsReducers),
    SharedModule,
    EffectsModule.forFeature([JuicesEffects, CandiesEffects])
  ]
})
export class FruitsModule { }
