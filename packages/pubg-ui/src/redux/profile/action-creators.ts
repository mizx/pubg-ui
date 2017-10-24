import * as ActionType from './action-types';

export interface SetPlatformName {
  type: ActionType.SET_PLATFORM_NAME;
  payload: { platformName: string };
}

export const setPlatformName = (platformName: string): SetPlatformName => ({
  type: ActionType.SET_PLATFORM_NAME,
  payload: { platformName }
});

export type Actions =
  SetPlatformName
;
