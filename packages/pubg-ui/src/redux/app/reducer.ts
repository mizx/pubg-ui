import { ActionType, Actions, Platform } from '.';

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

export default (state: State = initialState, action: Actions): State => {
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
        userDisplayName,
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
