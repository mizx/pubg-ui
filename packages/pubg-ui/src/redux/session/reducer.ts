import * as ActionType from './action-types';
import * as ActionCreators from './action-creators';
import { Actions } from './action-creators';

export interface State {
  accessToken: string | null;
  playerNetId: string | null;
  userSerial: string | null;
  countryCode: string | null;
}

// Not sure if devs have a default countryCode
// so going with one that will always work.
const defaultCountryCode = 'US';

export const initialState: State = {
  accessToken: null,
  playerNetId: null,
  userSerial: null,
  countryCode: null
};

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SET_ACCESS_TOKEN:
    case ActionType.SET_PLAYER_NET_ID:
    case ActionType.SET_USER_SERIAL:
    case ActionType.COUNTRY_CODE_SUCCESS: {
      return { ...state, ...action.payload };
    }
    case ActionType.COUNTRY_CODE_FAILURE: {
      return { ...state, countryCode: defaultCountryCode }
    }
    default: return state;
  }
}
