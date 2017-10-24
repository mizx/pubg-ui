import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { Platform } from '../../types';
import { RootAction, RootState } from '..';
import { setAppId, setPlatform } from '../app';
import { setPlatformName } from '../profile';
import { setAccessToken, setPlayerNetId, setUserSerial } from '../session';
import * as ActionType from './action-types';
import * as optionActionCreator from '../option/action-creators';

export interface AuthDataResponse {
  accessToken: string; // 468 character hex string
  appId: string; // "578080"
  platformType: Platform; // "Steam"
  playerNetId: string; // 64bit SteamID
  userDisplayName: string; // Steam name
  userSerial: string; // 64bit SteamID
}

export const authenticate: Epic<RootAction, RootState> = (action$) =>
  action$
    .ofType(ActionType.AUTHENTICATE)
    .delay(1000) // TODO: Workaround for coherent not initializing engine promise
    .switchMap(action =>
      Observable
        .fromPromise(window.engine.call<AuthDataResponse>('GetClientAuthData'))
        .mergeMap(auth => ([
          setAppId(auth.appId),
          setPlatform(auth.platformType),
          setPlatformName(auth.userDisplayName),
          setAccessToken(auth.accessToken),
          setPlayerNetId(auth.playerNetId),
          setUserSerial(auth.userSerial)
        ]))
    );

export default combineEpics(
  authenticate
);
