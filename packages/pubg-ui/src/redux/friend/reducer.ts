import { ActionType, Actions } from './index';
import { Friend } from '../../types';

export interface State {
  loading: boolean;
  friends: Friend[];
  friendsOnline: number;
  friendsInGame: number;
  error: string | null;
}

export const initialState: State = {
  loading: true,
  friends: [],
  friendsOnline: 0,
  friendsInGame: 0,
  error: null
};

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.FETCH_FRIENDS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case ActionType.FETCH_FRIENDS_SUCCESS:
    case ActionType.FETCH_FRIENDS_FAILURE: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: return state;
  }
};
