import store from '../store';
import { steamFriendsResponse, steamFriendsFailure } from './action-creators';
import { EngineFriendResponse } from './types';

const onReadFriendsListResult = (unknown: number, error: string | null, friends: EngineFriendResponse[]) => {
  if (error) {
    store.dispatch(steamFriendsFailure(new Error(error)));
  } else {
    store.dispatch(steamFriendsResponse(friends));
  }
}

window.engine.on('ReadFriendListResult', onReadFriendsListResult);

// REMOVED IN PRODUCTION BUILDS
if (process.env.NODE_ENV !== 'production') {
  const friends: EngineFriendResponse[] = [
    {
      userSerial: '7656119798886123',
      userRealName: 'Skipper Colette',
      userDisplayName: 'TheAsh3nR',
      presence: {
        isOnline: true,
        isPlaying: true,
        isJoinable: false,
        isPlayingThisGame: true,
        status: 1
      }
    },
    {
      userSerial: '7656119798886124',
      userRealName: 'Iseabal Ostwald',
      userDisplayName: 'ElectroFr3ak ',
      presence: {
        isOnline: true,
        isPlaying: false,
        isJoinable: false,
        isPlayingThisGame: false,
        status: 1
      }
    },
    {
      userSerial: '7656119798886125',
      userRealName: 'Gery Edgar',
      userDisplayName: '#DestructiveFlame#',
      presence: {
        isOnline: false,
        isPlaying: false,
        isJoinable: false,
        isPlayingThisGame: false,
        status: 0
      }
    }
  ];

  const onReadFriendsList = () => window.engine.trigger('ReadFriendListResult', 1, null, friends);
  window.engine.mock('ReadFriendList', onReadFriendsList, false);
}
