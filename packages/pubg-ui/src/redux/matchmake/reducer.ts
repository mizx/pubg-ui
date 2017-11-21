import { Reducer } from 'redux';

import * as ActionType from './action-types';
import { RootAction } from '../root-action';

export interface State {
  inQueue: boolean;
  ready: boolean;
  party: undefined[];
  error: string | null;
}

export const initialState: State = {
  inQueue: false,
  ready: false,
  party: [],
  error: null
};

export const reducer: Reducer<State> = (state = initialState, action: RootAction): State => {
  switch (action.type) {
    case ActionType.QUEUE_START: {
      return { ...state, inQueue: true };
    }
    case ActionType.QUEUE_CANCEL: {
      return { ...state, inQueue: false };
    }
    case ActionType.QUEUE_ERROR: {
      const { error } = action.payload;
      return { ...state, inQueue: false, error };
    }
    default: return state;
  }
};

export default reducer;
