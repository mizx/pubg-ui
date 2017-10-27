import { ActionType, Actions } from './index';
import {
  EngineFriendResponse,
  SocketFriendResponse,
  InviteAllow,
  FriendState
} from '../../types';

export interface Friend {
  platformId: string;
  platformName: string;
  accountId?: string;        // delayed
  nickname?: string;         // delayed
  avatarUrl?: string;        // delayed
  inviteAllow?: InviteAllow; // delayed
  friendState?: FriendState;   // delayed
}

export type FriendMap = { [platformId: string]: Friend };

export interface State {
  loading: boolean;
  friends: FriendMap;
  friendsOnline: number;
  friendsInGame: number;
  error: string | null;
}

export const initialState: State = {
  loading: true,
  friends: {},
  friendsOnline: 0,
  friendsInGame: 0,
  error: null
};

const friendsEngineMap = (state: FriendMap, friends: EngineFriendResponse[]) => {
  const newState = { ...state };

  friends.forEach(friend => {
    newState[friend.userSerial] = {
      platformId: friend.userSerial,
      platformName: friend.userDisplayName
    };
  });

  return newState;
};

const friendsSocketMap = (state: FriendMap, friends: SocketFriendResponse[]) =>  {
  const newState = { ...state };

  friends.forEach(friend => {
    const platformId = friend.SteamId;

    state[platformId] = {
      ...state[platformId],
      accountId: friend.AccountId,
      nickname: friend.Nickname,
      avatarUrl: friend.AvatarUrl,
      inviteAllow: friend.InviteAllow,
      friendState: friend.State
    };
  });

  return newState;
};

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.STEAM_FRIENDS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case ActionType.STEAM_FRIENDS_RESPONSE: {
      return {
        ...state,
        loading: false,
        friends: friendsEngineMap(state.friends, action.payload.friends)
      }
    }
    case ActionType.SOCKET_FRIENDS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case ActionType.SOCKET_FRIENDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        friends: friendsSocketMap(state.friends, action.payload.friends)
      };
    }
    case ActionType.STEAM_FRIENDS_FAILURE:
    case ActionType.SOCKET_FRIENDS_FAILURE: {
      return {
        ...state,
        loading: false,
        ...action.payload
      }
    }
    default: return state;
  }
};
