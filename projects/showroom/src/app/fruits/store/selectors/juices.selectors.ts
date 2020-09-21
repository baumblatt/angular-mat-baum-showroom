import {createSelector} from '@ngrx/store';
import {getFruitsState} from '../reducers/feature.reducer';

const getJuicesState = createSelector(
  getFruitsState,
  state => state.juices
);
