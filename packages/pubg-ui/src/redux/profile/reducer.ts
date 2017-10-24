import * as ActionType from './action-types';
import * as ActionCreators from './action-creators';
import { Actions } from './action-creators';

export interface State {
  platformName: string | null;
}

export const initialState: State = {
  platformName: null
};

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SET_PLATFORM_NAME: {
      return { ...state, ...action.payload };
    }
    default: return state;
  }
};
