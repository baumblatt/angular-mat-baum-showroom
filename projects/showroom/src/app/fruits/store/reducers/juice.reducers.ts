import {Action, createReducer} from '@ngrx/store';

export interface JuiceState {

}

export const initialState: JuiceState = {};

const reducer = createReducer<JuiceState, Action>(
  initialState,
  // ...ons: On<JuiceState>()

);

export function juiceReducer(state: JuiceState | undefined, action: Action): JuiceState {
  return reducer(state, action);
}
