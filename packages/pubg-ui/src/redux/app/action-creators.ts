import * as ActionType from './action-types';

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

export type Actions =
  | GetVersion
  | SetVersion
;
