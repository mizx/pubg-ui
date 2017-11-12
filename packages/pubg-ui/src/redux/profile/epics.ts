import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from '..';
import { setPlatformUsername } from './action-creators';
import * as ActionType from './action-types';
import { ActionType as AppActionType, AuthSuccess } from '../app';

export const authSuccessEpic: Epic<RootAction, RootState> = action$ =>
  action$.ofType(AppActionType.AUTH_SUCCESS)
    .map((action: AuthSuccess) => setPlatformUsername(action.payload.userDisplayName));


export default combineEpics(
  authSuccessEpic
);
