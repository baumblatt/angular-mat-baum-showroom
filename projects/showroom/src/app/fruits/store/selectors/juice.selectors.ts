import {createSelector} from '@ngrx/store';
import {getFruitsState} from '../reducers/feature.reducer';

const getJuiceState = createSelector(
  getFruitsState,
  state => state.juice
);
