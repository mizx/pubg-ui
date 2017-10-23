import * as ActionType from './action-types';
import { State as AuthState } from './reducer';

export interface Authenticate {
  type: ActionType.AUTHENTICATE;
}

export const authenticate = (): Authenticate => ({
  type: ActionType.AUTHENTICATE
});

export interface SetAuthData {
  type: ActionType.SET_AUTH_DATA;
  payload: AuthState;
}

export const setAuthData = (authData: AuthState): SetAuthData => ({
  type: ActionType.SET_AUTH_DATA,
  payload: authData
});

export type Actions =
  | Authenticate
  | SetAuthData
;
