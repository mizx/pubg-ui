import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from '..';
import { ActionType } from '.';
import { ActionType as AppActionType, AuthSuccess } from '../app';
import { setPlatformUsername } from './action-creators';

export const authSuccessEpic: Epic<RootAction, RootState> = action$ =>
  action$.ofType(AppActionType.AUTH_SUCCESS)
    .map((action: AuthSuccess) => setPlatformUsername(action.payload.userDisplayName));


export default combineEpics(
  authSuccessEpic
);
