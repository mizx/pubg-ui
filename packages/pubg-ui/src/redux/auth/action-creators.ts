import * as ActionType from './action-types';

export interface Authenticate {
  type: ActionType.AUTHENTICATE;
}

export const authenticate = (): Authenticate => ({
  type: ActionType.AUTHENTICATE
});

export type Actions =
  | Authenticate
;
