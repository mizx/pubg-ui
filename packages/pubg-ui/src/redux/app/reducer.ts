import { Reducer } from 'redux';

import * as ActionType from './action-types';
import { Actions } from './action-creators';
import { Platform } from './types';

export interface State {
  version?: string;
  appId?: string;
  platform?: Platform;
  session: {
    token?: string;
    playerNetId?: string;
    userSerial?: string;
    countryCode?: string;
  }
}

export const initialState: State = {
  appId: '578080',
  session: { }
};

export const reducer: Reducer<State> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.VERSION_SUCCESS: {
      return { ...state, ...action.payload }
    }
    case ActionType.COUNTRY_CODE_SUCCESS: {
      return {
        ...state,
        session: {
          ...state.session,
          ...action.payload
        }
      }
    }
    case ActionType.AUTH_SUCCESS: {
      const {
        accessToken,
        appId,
        platformType,
        playerNetId,
        userSerial
      } = action.payload;

      return {
        ...state,
        appId,
        platform: platformType,
        session: {
          ...state.session,
          token: accessToken,
          playerNetId,
          userSerial
        }
      }
    }
    default: return state;
  }
}

export default reducer;