import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { Epic } from 'modules';
import { setVersion } from './action-creators';

const test: Epic = (action$) => Observable
    .fromPromise(window.engine.call('GetGameVersion'))
    .switchMap((v: string) => Observable.of(setVersion('1.2.3')))
    .do(() => console.log('test'));

export default combineEpics(
  test
);
