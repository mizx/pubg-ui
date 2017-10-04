import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { Epic } from 'modules';
import { setVersion, setCountry } from './action-creators';
import * as ActionType from './action-types';

const COUNTRY_URL = 'https://j9t5h48n24.execute-api.us-west-2.amazonaws.com/prod/countrycode';

interface CountryResponse {
  country_code: string;
}

// NOTE: epic currently not in use -- CORS issue
const countryEpic: Epic = (action$) => Observable
  .ajax.getJSON<CountryResponse>(COUNTRY_URL, { 'Content-Type': 'application/x-www-form-urlencoded' })
    .map(response => setCountry(response.country_code))
    .catch(error => Observable.of(setCountry()));

const versionEpic: Epic = () => Observable
  .fromPromise(window.engine.call<string>('GetGameVersion'))
  .mergeMap(version => Observable.of(setVersion(version)));

export default combineEpics(
  // countryEpic,
  versionEpic
);
