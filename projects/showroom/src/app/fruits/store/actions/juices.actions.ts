import {createAction, props} from '@ngrx/store';

export const sampleAction = createAction(
  '[fruits:juices] Sample action',
  props<{ anything: string }>(),
);


