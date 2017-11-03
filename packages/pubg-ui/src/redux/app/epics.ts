import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { RootAction, RootState } from '..';
import { setVersion, engineReady, webSocketReady } from './action-creators'
import * as ActionType from './action-types';

// TODO: make this actually check when engine is ready for calls
export const engineReadyEpic: Epic<RootAction, RootState> = action$ =>
  Observable
    .of(null)
    .delay(1500) // TODO: Remove this delay.
    .map(() => engineReady());

export const webSocketReadyEpic: Epic<RootAction, RootState> = action$ =>
  Observable.of(null)
    .delay(2500) // TODO: wait for auth, version, and country code
    .map(() => webSocketReady());

export const versionEpic: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(ActionType.GET_VERSION)
    .delay(1000)
    .switchMap(action =>
      Observable
        .fromPromise(window.engine.call<string>('GetGameVersion'))
        .map(version => setVersion(version))
    );

export default combineEpics(
  engineReadyEpic,
  webSocketReadyEpic,
  versionEpic
);
