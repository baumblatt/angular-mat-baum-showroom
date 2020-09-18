import {Action, createReducer} from '@ngrx/store';

export interface CandiesState {

}

export const initialState: CandiesState = {};

const reducer = createReducer<CandiesState, Action>(
  initialState,
  // ...ons: On<CandiesState>()

);

export function candiesReducer(state: CandiesState | undefined, action: Action): CandiesState {
  return reducer(state, action);
}
