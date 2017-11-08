import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { RootAction, RootState } from '..';
import {
  ActionType,
  setVersion,
  engineReady,
  webSocketInit,
  setAppId,
  setPlatform,
  Platform,
  AuthResponse
} from '.'
import { setPlatformName } from '../profile';
import { setAccessToken, setPlayerNetId, setUserSerial } from '../session';

// TODO: make this actually check when engine is ready for calls
export const engineReadyEpic: Epic<RootAction, RootState> = action$ =>
  Observable
    .of(null)
    .delay(1500) // TODO: Remove this delay.
    .map(() => engineReady());

export const getVersionEpic: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(ActionType.ENGINE_READY)
    .switchMap(action =>
      Observable
        .fromPromise(window.engine.call<string>('GetGameVersion'))
        .map(version => setVersion(version))
      );

export const authenticateEpic: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(ActionType.ENGINE_READY)
    .switchMap(action =>
      Observable
        .fromPromise(window.engine.call<AuthResponse>('GetClientAuthData'))
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
  engineReadyEpic,
  getVersionEpic,
  authenticateEpic
);
