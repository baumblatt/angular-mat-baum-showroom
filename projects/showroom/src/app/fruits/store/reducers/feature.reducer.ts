import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import { juiceReducer, JuiceState } from './juice.reducers';

export interface FruitsState {
  juice: JuiceState;
}

export const fruitsReducers: ActionReducerMap<FruitsState> = {
  juice: juiceReducer,
};

export const getFruitsState = createFeatureSelector<FruitsState>(
  'fruits'
);

