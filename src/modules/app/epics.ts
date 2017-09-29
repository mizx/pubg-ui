import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { Epic } from 'modules';
import { setVersion } from './action-creators';
import * as ActionType from './action-types';

const version: Epic = (action$) => Observable
  .fromPromise(window.engine.call<string>('GetGameVersion'))
  .mergeMap(version => Observable.of(setVersion(version)))

export default combineEpics(
  version
);
