import * as ActionType from './action-types';
import { Action } from './action-creators';

export interface State {
  version: string;
}

const initialState: State = {
  version: '1.1.1'
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_VERSION: {
      const { version } = action.payload;

      return { ...state, version };
    }
    default: return state;
  }
};
