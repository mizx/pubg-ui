import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { RootAction, RootState } from '..';
import { setVersion } from './action-creators'
import * as ActionType from './action-types';

export const versionEpic: Epic<RootAction, RootState> = (action$) =>
  action$
    .ofType(ActionType.GET_VERSION)
    .delay(1000)
    .switchMap(action =>
      Observable
        .fromPromise(window.engine.call<string>('GetGameVersion'))
        .map(version => setVersion(version))
    );

export default combineEpics(
  versionEpic
);
