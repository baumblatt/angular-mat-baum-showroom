import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoadingDialog } from './components/loading/loading.dialog';
import { HomeContainer } from './containers/home/home.container';
import { LayoutContainer } from './containers/layout/layout.container';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MessagesEffects } from './store/effects/messages.effects';
import { coreReducers } from './store/reducers/feature.reducer';


@NgModule({
  declarations: [LoadingDialog, HomeContainer, LayoutContainer],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    EffectsModule.forFeature([MessagesEffects]),
    StoreModule.forFeature('core', coreReducers)
  ]
})
export class CoreModule { }
