import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { RootAction, RootState } from '..';
import { setVersion, engineReady } from './action-creators'
import * as ActionType from './action-types';

// TODO: make this actually check when engine is ready for calls
export const engineReadyEpic: Epic<RootAction, RootState> = action$ =>
  Observable
    .of(null)
    .delay(1500) // TODO: Remove this delay.
    .map(() => engineReady())

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
  versionEpic
);
