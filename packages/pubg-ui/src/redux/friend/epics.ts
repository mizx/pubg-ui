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
    .switchMap(action =>
      Observable
        .of(steamFriendsRequest())
        // .delay(5000)
        // .repeat(-1)
    );

export const onSteamFriendsRequestEpic: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(ActionType.STEAM_FRIENDS_REQUEST)
    .do(() => window.engine.trigger('ReadFriendList'))
    .ignoreElements();

export const onSteamResponseEpic: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(ActionType.STEAM_FRIENDS_RESPONSE)
    .map(() => socketFriendsRequest());

export default combineEpics(
  onEngineReadyEpic,
  onSteamFriendsRequestEpic,
  onSteamResponseEpic
);