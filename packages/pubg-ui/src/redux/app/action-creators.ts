import * as ActionType from './action-types';
import { AuthResponse } from './types';
import { Announcement } from 'websocket/response';

export interface AppInitialize {
  type: ActionType.APP_INITIALIZE;
}

export const appInitialize = (): AppInitialize => ({
  type: ActionType.APP_INITIALIZE
});

export interface EngineReady {
  type: ActionType.ENGINE_READY;
}

export const engineReady = (): EngineReady => ({
  type: ActionType.ENGINE_READY
});

// AUTHENTICATION
export interface AuthRequest {
  type: ActionType.AUTH_REQUEST;
}

export const authRequest = (): AuthRequest => ({
  type: ActionType.AUTH_REQUEST
});

export interface AuthSuccess {
  type: ActionType.AUTH_SUCCESS;
  payload: AuthResponse;
}

export const authSuccess = (response: AuthResponse): AuthSuccess => ({
  type: ActionType.AUTH_SUCCESS,
  payload: response
});

export interface AuthFailure {
  type: ActionType.AUTH_FAILURE;
  payload: { error: string };
}

export const authFailure = (error: Error): AuthFailure => ({
  type: ActionType.AUTH_FAILURE,
  payload: { error: error.message }
});

// COUNTRY CODE
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

// VERSIONING
export interface VersionRequest {
  type: ActionType.VERSION_REQUEST;
}

export const versionRequest = (): VersionRequest => ({
  type: ActionType.VERSION_REQUEST
});

export interface VersionSuccess {
  type: ActionType.VERSION_SUCCESS;
  payload: { version: string };
}

export const versionSuccess = (version: string): VersionSuccess => ({
  type: ActionType.VERSION_SUCCESS,
  payload: { version }
});

export interface AnnouncementRequest {
  type: ActionType.ANNOUNCEMENT_REQUEST;
}

export const announcementRequest = (): AnnouncementRequest => ({
  type: ActionType.ANNOUNCEMENT_REQUEST
});

export interface AnnouncementSuccess {
  type: ActionType.ANNOUNCEMENT_SUCCESS;
  payload: Announcement[];
}

export const announcementSuccess = (announcements: Announcement[]): AnnouncementSuccess => ({
  type: ActionType.ANNOUNCEMENT_SUCCESS,
  payload: announcements
});

export interface AnnouncementFailure {
  type: ActionType.ANNOUNCEMENT_FAILURE;
  payload: { error: string };
}

export const announcementFailure = (error: Error): AnnouncementFailure => ({
  type: ActionType.ANNOUNCEMENT_FAILURE,
  payload: { error: error.message }
});

export type AppActions =
  | AppInitialize
  | EngineReady
  | AuthRequest
  | AuthSuccess
  | AuthFailure
  | CountryCodeRequest
  | CountryCodeSuccess
  | VersionRequest
  | VersionSuccess
  | AnnouncementRequest
  | AnnouncementSuccess
  | AnnouncementFailure
;
