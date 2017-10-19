import * as ActionType from './action-types';

export interface AppInitialize {
  type: ActionType.APP_INIT;
}

export const appInitialize = (): AppInitialize => ({
  type: ActionType.APP_INIT
});

export type Action =
  | AppInitialize
;
