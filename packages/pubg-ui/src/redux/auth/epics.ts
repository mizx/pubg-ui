import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { RootAction, RootState } from '..';
import { setAuthData } from './action-creators';
import * as ActionType from './action-types';
import * as optionActionCreator from '../option/action-creators';
import { State as AuthState } from './reducer';

export const authenticate: Epic<RootAction, RootState> = (action$) =>
  action$
    .ofType(ActionType.AUTHENTICATE)
    .delay(1000)
    .switchMap(action =>
      Observable
        .fromPromise(window.engine.call<AuthState>('GetClientAuthData'))
        .map(auth => setAuthData(auth))
    );

export default combineEpics(
  authenticate
);
