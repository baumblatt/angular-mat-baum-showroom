import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers, metaReducers } from './store/reducers/global.reducers';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from "@angular/fire";
import {AngularFireAnalyticsModule, ScreenTrackingService} from "@angular/fire/analytics";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers, runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true }}),
    StoreDevtoolsModule.instrument({name: 'showroom', maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule
  ],
  providers: [ScreenTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
