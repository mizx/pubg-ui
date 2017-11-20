import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from '..';
import * as ActionType from '../action-types';
import { queueStart, partyRequest } from './action-creators';
import { PartyData } from '../../websocket/test';

/**
 * TODO: Eventually TOGGLE_READY will need to check
 * matchmake.ready state and either trigger ready
 * or start queue if soloing.
 */
export const onReadyEpic: Epic<RootAction, RootState> = (action$, api) =>
  action$.ofType(ActionType.TOGGLE_READY)
    .map(() => queueStart());

export const onPartyRequest: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.PARTY_REQUEST)
    .map(() => new PartyData())
    .map(party => party.toAction());

export const onWebSocketReady: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.WEBSOCKET_READY)
    .map(() => partyRequest());
    
export default combineEpics(
  onReadyEpic,
  onPartyRequest,
  onWebSocketReady
);
