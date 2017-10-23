import * as ActionType from './action-types';
import * as ActionCreators from './action-creators';
import { Actions } from './action-creators';

export interface State {
  accessToken: string;      // 468 character hex string
  appId: string;            // "578080"
  platformType: string;     // "Steam"
  playerNetId: string;      // "76561197988861..."
  userDisplayName: string;  // steam name
  userSerial: string;       // "76561197988861..."
}

export type AuthState = State | null;

export const initialState: AuthState = null;

export default (state: AuthState = initialState, action: Actions): AuthState => {
  switch(action.type) {
    case ActionType.SET_AUTH_DATA: {
      return { ...action.payload }
    }
    default: return state;
  }
};
