import {Action, createReducer} from '@ngrx/store';

export interface JuicesState {

}

export const initialState: JuicesState = {};

const reducer = createReducer<JuicesState, Action>(
  initialState,
  // ...ons: On<JuicesState>()

);

export function juicesReducer(state: JuicesState | undefined, action: Action): JuicesState {
  return reducer(state, action);
}
