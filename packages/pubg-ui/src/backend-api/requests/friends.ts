import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from '../../redux';
import { ActionType, BackendFriendsRequest } from '../../redux/friend';
import { webSocketRequest } from '../../redux/app';

export const onBackendFriendsRequest: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.BACKEND_FRIENDS_REQUEST)
    .map(action => action as BackendFriendsRequest)
    .map(action => {
      const friendSteamIds = Object.keys(action.payload);
      return webSocketRequest('UserProxyApi', 'GetBroUserStatesBySteamId', friendSteamIds);
    });
