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
import { setAccessToken, setPlayerNetId, setUserSerial, ActionType as SessionActionType } from '../session';

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

export const websocketForkEpic: Epic<RootAction, RootState> = action$ =>
  Observable.forkJoin(
    action$.ofType(ActionType.SET_PLATFORM).take(1),
    action$.ofType(ActionType.SET_VERSION).take(1),
    action$.ofType(SessionActionType.SET_ACCESS_TOKEN).take(1),
    action$.ofType(SessionActionType.SET_PLAYER_NET_ID).take(1),
    action$.ofType(SessionActionType.COUNTRY_CODE_SUCCESS).take(1)
  )
  .map(() => webSocketInit())

export default combineEpics(
  engineReadyEpic,
  getVersionEpic,
  authenticateEpic,
  websocketForkEpic
);
