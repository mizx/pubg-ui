import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { RootAction, RootState } from '..';
import { ActionType as AppActionType } from '../app';
import {
  steamFriendsRequest,
  steamFriendsResponse,
  steamFriendsFailure,
  socketFriendsRequest,
  socketFriendsSuccess,
  socketFriendsFailure
} from './action-creators';
import { ActionType } from './index';

export const onEngineReadyEpic: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(AppActionType.ENGINE_READY)
    .map(() => steamFriendsRequest());

export const engineRequestEpic: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(ActionType.STEAM_FRIENDS_REQUEST)
    .do(() => window.engine.trigger('ReadFriendList'))
    .ignoreElements();

// export const socketFriendsEpic: Epic<RootAction, RootState> = action$ =>
//   action$
//     .ofType(AppActionType.WEBSOCKET_READY)
//     .switchMap(action =>
//       Observable
//         .of(socketFriendsRequest())
//         .delay(5000)
//         .repeat(-1)
//     );

export default combineEpics(
  onEngineReadyEpic,
  engineRequestEpic,
  // socketFriendsEpic
);
