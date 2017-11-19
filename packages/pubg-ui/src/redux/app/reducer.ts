import { Reducer } from 'redux';

import * as ActionType from '../action-types';
import { RootAction } from '../root-action';
import { Platform } from './types';

export interface State {
  version?: string;
  appId?: string;
  platform?: Platform;
  token?: string;
  platformId?: string;
  backendId?: string;
  userSerial?: string;
  countryCode?: string;
}

export const initialState: State = {
  appId: '578080',
  countryCode: 'US'
};

export const reducer: Reducer<State> = (state = initialState, action: RootAction): State => {
  switch (action.type) {
    case ActionType.VERSION_SUCCESS: {
      return { ...state, ...action.payload };
    }
    case ActionType.COUNTRY_CODE_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
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
        token: accessToken,
        platformId: playerNetId,
        userSerial
      };
    }
    case ActionType.WEBSOCKET_CONNECTED: {
      const { account } = action.payload;
      return {
        ...state,
        backendId: account.AccountId
      };
    }
    default: return state;
  }
};

export default reducer;
