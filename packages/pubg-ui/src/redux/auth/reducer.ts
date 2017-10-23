import * as ActionType from './action-types';
import * as ActionCreators from './action-creators';
import { Actions } from './action-creators';

export interface State {
  accessToken: string | null;      // 468 character hex string
  appId: string;            // "578080"
  platformType: string;     // "Steam"
  playerNetId: string | null;      // "76561197988861..."
  userDisplayName: string;  // steam name
  userSerial: string | null;       // "76561197988861..."
}

export const initialState: State = {
  accessToken: null,
  appId: '578080',
  platformType: 'Steam',
  playerNetId: null,
  userDisplayName: '',
  userSerial: null
};

export default (state: State = initialState, action: Actions): State => {
  switch(action.type) {
    case ActionType.SET_AUTH_DATA: {
      return { ...state, ...action.payload }
    }
    default: return state;
  }
};
