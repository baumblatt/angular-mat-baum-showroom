import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import { juiceReducer, JuiceState } from './juice.reducers';
import { candiesReducer, CandiesState } from './candies.reducers';

export interface FruitsState {
  juice: JuiceState;
  candies: CandiesState;
}

export const fruitsReducers: ActionReducerMap<FruitsState> = {
  juice: juiceReducer,
  candies: candiesReducer,
};

export const getFruitsState = createFeatureSelector<FruitsState>(
  'fruits'
);

