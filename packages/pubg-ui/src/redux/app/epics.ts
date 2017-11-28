import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import { RootAction, RootState } from '..';
import * as ActionType from './action-types';
import { AuthResponse, CountryCodeResponse } from './types';
import {
  engineReady,
  authRequest,
  authSuccess,
  countryCodeRequest,
  countryCodeSuccess,
  versionRequest,
  versionSuccess,
  announcementRequest,
  announcementSuccess
} from './action-creators';
import webSocket from '../../websocket';

const ajaxOptions = {
  method: 'GET',
  crossDomain: true,
  url: 'https://j9t5h48n24.execute-api.us-west-2.amazonaws.com/prod/countrycode',
  responseType: 'json'
};

const countryCodeDefault = 'US';

export const appInitializeEpic: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.APP_INITIALIZE)
    .map(() => countryCodeRequest());

// TODO: make this actually check when engine is ready for calls
export const engineReadyEpic: Epic<RootAction, RootState> = action$ =>
  Observable.of(null)
    .delay(1500) // TODO: Remove this delay.
    .map(() => engineReady());

export const onEngineReadyEpic: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.ENGINE_READY)
    .switchMap(() =>
      Observable.merge(
        Observable.of(authRequest()),
        Observable.of(versionRequest())
      )
    );

export const authRequestEpic: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.AUTH_REQUEST)
    .switchMap(() =>
      Observable.fromPromise(window.engine.call<AuthResponse>('GetClientAuthData'))
        .map(response => authSuccess(response))
    );

export const countryCodeEpic: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.COUNTRY_CODE_REQUEST)
    .mergeMap(action =>
      Observable.ajax(ajaxOptions)
        .map(data => data.response as CountryCodeResponse)
        .map(response => countryCodeSuccess(response.country_code))
        // WebSocket depends on this. Failed request calls success with default value.
        .catch(() => Observable.of(countryCodeSuccess(countryCodeDefault)))
    );

export const versionRequestEpic: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.VERSION_REQUEST)
    .switchMap(action =>
      Observable.fromPromise(window.engine.call<string>('GetGameVersion'))
        .map(version => versionSuccess(version))
    );

// FIXME: push action is not firing but route is changing
export const tempPushAuthPageEpic: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.APP_INITIALIZE)
    .delay(1)
    .map(() => push('/auth'));

export const announcementEpic: Epic<RootAction, RootState> = action$ =>
    action$.ofType(ActionType.ANNOUNCEMENT_REQUEST)
      .switchMap(() => 
        webSocket.getAnnouncements()
          .map(announcements => announcementSuccess(announcements))
      );
  
export default combineEpics(
  appInitializeEpic,
  engineReadyEpic,
  onEngineReadyEpic,
  authRequestEpic,
  countryCodeEpic,
  versionRequestEpic,
  tempPushAuthPageEpic,
  announcementEpic
);
