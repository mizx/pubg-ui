import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { RootAction, RootState } from '..';
import {
  ActionType,
  countryCodeRequest,
  countryCodeSuccess,
  countryCodeFailure
} from '.';
import { ActionType as AppActionType } from '../app';

const ajaxOptions = {
  method: 'GET',
  crossDomain: true,
  url: 'https://j9t5h48n24.execute-api.us-west-2.amazonaws.com/prod/countrycode',
  responseType: 'json'
};

interface CountryCodeResponse {
  country_code: string;
}

export const appInitEpic: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(AppActionType.APP_INITIALIZE)
    .map(() => countryCodeRequest());

export const countryCodeEpic: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(ActionType.COUNTRY_CODE_REQUEST)
    .mergeMap(action =>
      Observable
        .ajax(ajaxOptions)
        .map(data => data.response as CountryCodeResponse)
        .map(response => countryCodeSuccess(response.country_code))
        .catch((error: Error) => Observable.of(countryCodeFailure(error)))
    );

export default combineEpics(
  appInitEpic,
  countryCodeEpic
);
