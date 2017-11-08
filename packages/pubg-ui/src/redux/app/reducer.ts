import { ActionType, Actions, Platform } from '.';

export interface State {
  version: string | null;
  appId: string;
  platform: Platform | null;
}

export const initialState: State = {
  version: null,
  appId: '578080',
  platform: 'Steam'
};

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SET_APP_ID:
    case ActionType.SET_PLATFORM:
    case ActionType.SET_VERSION: {
      return { ...state, ...action.payload }
    }
    default: return state;
  }
}
