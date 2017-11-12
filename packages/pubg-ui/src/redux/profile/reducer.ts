import { Reducer } from 'redux';

import { ActionType } from '.';
import * as ActionCreators from './action-creators';
import { Actions } from './action-creators';

export interface State {
  platformUsername?: string;
}

export const initialState: State = { };

export const reducer: Reducer<State> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.SET_PLATFORM_USERNAME: {
      return { ...state, ...action.payload };
    }
    default: return state;
  }
};

export default reducer;