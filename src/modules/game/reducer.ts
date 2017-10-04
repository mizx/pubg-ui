import * as ActionType from './action-types';
import { Action } from './action-creators';

export interface State {
  country: string | null;
  version: string;
}

const initialState: State = {
  country: null,
  version: '1.1.1'
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_COUNTRY: {
      return { ...state, country: action.country };
    }
    case ActionType.SET_VERSION: {
      return { ...state, version: action.version };
    }
    default: return state;
  }
};
