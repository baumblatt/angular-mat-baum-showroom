import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import { juicesReducer, JuicesState } from './juices.reducers';
import { candiesReducer, CandiesState } from './candies.reducers';

export interface FruitsState {
  juices: JuicesState;
  candies: CandiesState;
}

export const fruitsReducers: ActionReducerMap<FruitsState> = {
  juices: juicesReducer,
  candies: candiesReducer,
};

export const getFruitsState = createFeatureSelector<FruitsState>(
  'fruits'
);

