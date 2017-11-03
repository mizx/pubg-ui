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

export interface CountryCodeRequest {
  type: ActionType.COUNTRY_CODE_REQUEST;
}

export const countryCodeRequest = (): CountryCodeRequest => ({
  type: ActionType.COUNTRY_CODE_REQUEST
});

export interface CountryCodeSuccess {
  type: ActionType.COUNTRY_CODE_SUCCESS;
  payload: { countryCode: string };
}

export const countryCodeSuccess = (countryCode: string): CountryCodeSuccess => ({
  type: ActionType.COUNTRY_CODE_SUCCESS,
  payload: { countryCode }
});

export interface CountryCodeFailure {
  type: ActionType.COUNTRY_CODE_FAILURE;
  payload: { error: string }
}

export const countryCodeFailure = (error: Error): CountryCodeFailure => ({
  type: ActionType.COUNTRY_CODE_FAILURE,
  payload: { error: error.message }
});

export type Actions =
  | SetAccessToken
  | SetPlayerNetId
  | SetUserSerial
  | CountryCodeRequest
  | CountryCodeSuccess
  | CountryCodeFailure
;
