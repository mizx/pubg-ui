import * as ActionType from './action-types';
import { Action } from './action-creators';

export interface State {
  nothing: boolean;
}

const initialState: State = {
  nothing: true
};

export default (state: State = initialState, action: Action): State => {
  return state;
};
