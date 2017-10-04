import * as ActionType from './action-types';

export interface SetLayoutMode {
  type: ActionType.SET_LAYOUT_MODE;
  mode: string;
}

export const setLayoutMode = (mode: string): SetLayoutMode => ({
  type: ActionType.SET_LAYOUT_MODE,
  mode
});

export interface SetCountry {
  type: ActionType.SET_COUNTRY;
  country: string | null;
}

export const setCountry = (country?: string): SetCountry  => ({
  type: ActionType.SET_COUNTRY,
  country: country || null
});

export interface SetVersion {
  type: ActionType.SET_VERSION;
  version: string;
}

export const setVersion = (version: string): SetVersion => ({
  type: ActionType.SET_VERSION,
  version
});

export type Action =
  | SetLayoutMode
  | SetCountry
  | SetVersion
;
