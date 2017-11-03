import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { RootAction, RootState } from '..';
import { Platform } from '../../types';
import { setVersion, engineReady, webSocketInit, setAppId, setPlatform } from './action-creators'
import { setPlatformName } from '../profile';
import { setAccessToken, setPlayerNetId, setUserSerial } from '../session';
import * as ActionType from './action-types';

export interface AuthDataResponse {
  accessToken: string; // 468 character hex string
  appId: string; // "578080"
  platformType: Platform; // "Steam"
  playerNetId: string; // 64bit SteamID
  userDisplayName: string; // Steam name
  userSerial: string; // 64bit SteamID
}

// TODO: make this actually check when engine is ready for calls
export const engineReadyEpic: Epic<RootAction, RootState> = action$ =>
  Observable
    .of(null)
    .delay(1500) // TODO: Remove this delay.
    .map(() => engineReady());

// export const webSocketInitEpic: Epic<RootAction, RootState> = action$ =>
//   Observable.of(null)
//     .delay(2500) // TODO: wait for auth, version, and country code
//     .map(() => webSocketInit());

export const onEngineReady: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(ActionType.ENGINE_READY)
    .mergeMap(action =>
      Observable
        .concat(
          Observable
            .fromPromise(window.engine.call<string>('GetGameVersion'))
            .map(version => setVersion(version)),
          Observable
            .fromPromise(window.engine.call<AuthDataResponse>('GetClientAuthData'))
            .mergeMap(auth => ([
              setAppId(auth.appId),
              setPlatform(auth.platformType),
              setPlatformName(auth.userDisplayName),
              setAccessToken(auth.accessToken),
              setPlayerNetId(auth.playerNetId),
              setUserSerial(auth.userSerial)
            ])),
          Observable.of(webSocketInit())
        )
    )

// export const authenticate: Epic<RootAction, RootState> = action$ =>
//   action$
//     .ofType(ActionType.ENGINE_READY)
//     .switchMap(action =>
//       Observable
//         .fromPromise(window.engine.call<AuthDataResponse>('GetClientAuthData'))
//         .mergeMap(auth => ([
//           setAppId(auth.appId),
//           setPlatform(auth.platformType),
//           setPlatformName(auth.userDisplayName),
//           setAccessToken(auth.accessToken),
//           setPlayerNetId(auth.playerNetId),
//           setUserSerial(auth.userSerial)
//         ]))
//     );
//
// export const versionEpic: Epic<RootAction, RootState> = action$ =>
//   action$
//     .ofType(ActionType.ENGINE_READY)
//     .switchMap(action =>
//       Observable
//         .fromPromise(window.engine.call<string>('GetGameVersion'))
//         .map(version => setVersion(version))
//     );

export default combineEpics(
  engineReadyEpic,
  onEngineReady
);
