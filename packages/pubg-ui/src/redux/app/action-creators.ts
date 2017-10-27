import * as ActionType from './action-types';
import { Platform } from '../../types';

export interface WebSocketReady {
  type: ActionType.WEBSOCKET_READY;
}

export const webSocketReady = (): WebSocketReady => ({
  type: ActionType.WEBSOCKET_READY
});

export interface GetVersion {
  type: ActionType.GET_VERSION;
}

export const getVersion = (): GetVersion => ({
  type: ActionType.GET_VERSION
});

export interface SetVersion {
  type: ActionType.SET_VERSION;
  payload: { version: string };
}

export const setVersion = (version: string): SetVersion => ({
  type: ActionType.SET_VERSION,
  payload: { version }
});

export interface SetAppId {
  type: ActionType.SET_APP_ID;
  payload: { appId: string };
}

export const setAppId = (appId: string): SetAppId => ({
  type: ActionType.SET_APP_ID,
  payload: { appId }
});

export interface SetPlatform {
  type: ActionType.SET_PLATFORM;
  payload: { platform: Platform };
}

export const setPlatform = (platform: Platform): SetPlatform => ({
  type: ActionType.SET_PLATFORM,
  payload: { platform }
});

export type Actions =
  | WebSocketReady
  | GetVersion
  | SetVersion
  | SetAppId
  | SetPlatform
;
