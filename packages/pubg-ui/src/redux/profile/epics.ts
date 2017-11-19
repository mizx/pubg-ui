import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from '..';
import { setPlatformUsername } from './action-creators';
import { ActionType as AppActionType, AuthSuccess } from '../app';

export const authSuccessEpic: Epic<RootAction, RootState> = action$ =>
  action$.ofType(AppActionType.AUTH_SUCCESS)
    .map((action) => {
      const { payload } = (action as AuthSuccess);
      return setPlatformUsername(payload.userDisplayName);
    });

export default combineEpics(
  authSuccessEpic
);
