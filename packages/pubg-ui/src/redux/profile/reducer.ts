import { Reducer } from 'redux';

import * as ActionType from './action-types';
import { RootAction } from '../root-action';

export interface State {
  platformUsername?: string;
}

export const initialState: State = { };

export const reducer: Reducer<State> = (state = initialState, action: RootAction): State => {
  switch (action.type) {
    case ActionType.SET_PLATFORM_USERNAME: {
      return { ...state, ...action.payload };
    }
    default: return state;
  }
};

export default reducer;
