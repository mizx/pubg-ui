import * as ActionType from './action-types';

export interface SetVersion {
  type: ActionType.SET_VERSION,
  payload: { version: string; }
}

export const setVersion = (version: string): SetVersion => ({
  type: ActionType.SET_VERSION,
  payload: { version }
});

export interface SetLayoutMode {
  type: ActionType.SET_LAYOUT_MODE,
  payload: { mode: string; }
}

export const setLayoutMode = (mode: string): SetLayoutMode => ({
  type: ActionType.SET_LAYOUT_MODE,
  payload: { mode }
});

export type Action =
  | SetVersion
  | SetLayoutMode
;
