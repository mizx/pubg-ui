import * as ActionType from './action-types';
import * as ActionCreators from './action-creators';
import { Actions } from './action-creators';

export interface State {
  version: string;
}

export const initialState: State = {
  version: ''
};

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SET_VERSION: {
      return { ...state, ...action.payload }
    }
    default: return state;
  }
}
