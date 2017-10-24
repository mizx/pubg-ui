import * as ActionType from './action-types';

export interface SetAccessToken {
  type: ActionType.SET_ACCESS_TOKEN;
  payload: { accessToken: string };
}

export const setAccessToken = (accessToken: string): SetAccessToken => ({
  type: ActionType.SET_ACCESS_TOKEN,
  payload: { accessToken }
});

export interface SetPlayerNetId {
  type: ActionType.SET_PLAYER_NET_ID;
  payload: { playerNetId: string };
}

export const setPlayerNetId = (playerNetId: string): SetPlayerNetId => ({
  type: ActionType.SET_PLAYER_NET_ID,
  payload: { playerNetId }
});

export interface SetUserSerial {
  type: ActionType.SET_USER_SERIAL;
  payload: { userSerial: string };
}

export const setUserSerial = (userSerial: string): SetUserSerial => ({
  type: ActionType.SET_USER_SERIAL,
  payload: { userSerial }
});

export type Actions =
  | SetAccessToken
  | SetPlayerNetId
  | SetUserSerial
;
