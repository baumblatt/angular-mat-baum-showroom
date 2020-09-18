import {createSelector} from '@ngrx/store';
import {getFruitsState} from '../reducers/feature.reducer';

const getCandiesState = createSelector(
  getFruitsState,
  state => state.candies
);
