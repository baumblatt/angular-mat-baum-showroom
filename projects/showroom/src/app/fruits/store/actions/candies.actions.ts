import {createAction, props} from '@ngrx/store';

export const sampleAction = createAction(
  '[fruits:candies] Sample action',
  props<{ anything: string }>(),
);


