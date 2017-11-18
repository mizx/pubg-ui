import * as ActionType from './action-types';

export interface SetPlatformUsername {
  type: ActionType.SET_PLATFORM_USERNAME;
  payload: { platformUsername: string };
}

export const setPlatformUsername = (platformUsername: string): SetPlatformUsername => ({
  type: ActionType.SET_PLATFORM_USERNAME,
  payload: { platformUsername }
});

export type ProfileActions =
  SetPlatformUsername
;
