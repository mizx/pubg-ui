import store from '../store';
import { steamFriendsResponse, steamFriendsFailure } from './action-creators';
import { EngineFriendResponse } from '../../types';

const onReadFriendsList = (unknown: number, error: string | null, friends: EngineFriendResponse[]) => {
  if (error) {
    store.dispatch(steamFriendsFailure(new Error(error)));
  } else {
    store.dispatch(steamFriendsResponse(friends));
  }
}

window.engine.on('ReadFriendListResult', onReadFriendsList);
