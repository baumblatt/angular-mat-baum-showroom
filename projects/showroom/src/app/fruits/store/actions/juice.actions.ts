import {createAction, props} from '@ngrx/store';

export const sampleAction = createAction(
  '[fruits:juice] Sample action',
  props<{ anything: string }>(),
);


