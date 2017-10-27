import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { RootAction, RootState } from '..';
import { ActionType as AppActionType } from '../app';
import {
  fetchFriendsRequest,
  fetchFriendsSuccess,
  fetchFriendsFailure
} from './action-creators';
import { ActionType } from './index';

export const fetchFriendsEpic: Epic<RootAction, RootState> = action$ =>
  action$
    .ofType(AppActionType.WEBSOCKET_READY)
    .switchMap(action =>
      Observable
        .of(fetchFriendsRequest())
        .delay(5000)
        .repeat(-1)
    );

export default combineEpics(
  fetchFriendsEpic
);
