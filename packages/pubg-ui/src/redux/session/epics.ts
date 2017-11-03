import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { RootAction, RootState } from '..';
import { ActionType } from './index';
import {
  countryCodeRequest,
  countryCodeSuccess,
  countryCodeFailure
} from './action-creators';

const COUNTRY_CODE_URL = 'https://j9t5h48n24.execute-api.us-west-2.amazonaws.com/prod/countrycode';

interface CountryCodeResponse {
  country_code: string;
}

export const countryCodeEpic: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(ActionType.COUNTRY_CODE_REQUEST)
    .mergeMap(action =>
      Observable
        .ajax.getJSON(COUNTRY_CODE_URL)
        .map((response: CountryCodeResponse) => countryCodeSuccess(response.country_code))
        .catch((error: Error) =>
          Observable.of(countryCodeFailure(error))
        )
    );

export default combineEpics(
  countryCodeEpic
);
