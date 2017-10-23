import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { RootAction, RootState } from '..';
import * as actionCreator from './action-creators';
import * as ActionType from './action-types';
import * as optionActionCreator from '../option/action-creators';
import { State as AuthState } from './reducer';

export const authenticate: Epic<RootAction, RootState> = (action$) =>
  action$
    .ofType(ActionType.AUTHENTICATE)
    .delay(1000)
    .mergeMap(action =>
      Observable
        .fromPromise(window.engine.call<AuthState>('GetClientAuthData'))
        .map(auth => actionCreator.setAuthData(auth))
    );

export default combineEpics(
  authenticate
);
