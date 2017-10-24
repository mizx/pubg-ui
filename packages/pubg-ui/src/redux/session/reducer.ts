import * as ActionType from './action-types';
import * as ActionCreators from './action-creators';
import { Actions } from './action-creators';

export interface State {
  accessToken: string | null;
  playerNetId: string | null;
  userSerial: string | null;
}

export const initialState: State = {
  accessToken: null,
  playerNetId: null,
  userSerial: null
};

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SET_ACCESS_TOKEN:
    case ActionType.SET_PLAYER_NET_ID:
    case ActionType.SET_USER_SERIAL: {
      return { ...state, ...action.payload };
    }
    default: return state;
  }
}
