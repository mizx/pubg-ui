import { ActionType, Platform } from '.';

export interface AppInitialize {
  type: ActionType.APP_INITIALIZE;
}

export const appInitialize = (): AppInitialize => ({
  type: ActionType.APP_INITIALIZE
});

export interface WebSocketInit {
  type: ActionType.WEBSOCKET_INIT;
}

export const webSocketInit = (): WebSocketInit => ({
  type: ActionType.WEBSOCKET_INIT
});

export interface WebSocketReady {
  type: ActionType.WEBSOCKET_READY;
}

export const webSocketReady = (): WebSocketReady => ({
  type: ActionType.WEBSOCKET_READY
});

export interface EngineReady {
  type: ActionType.ENGINE_READY;
}

export const engineReady = (): EngineReady => ({
  type: ActionType.ENGINE_READY
});

export interface Authenticate {
  type: ActionType.AUTHENTICATE;
}

export const authenticate = (): Authenticate => ({
  type: ActionType.AUTHENTICATE
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
  | AppInitialize
  | EngineReady
  | WebSocketInit
  | WebSocketReady
  | SetVersion
  | SetAppId
  | SetPlatform
;
