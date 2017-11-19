import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import { RootAction, RootState } from '..';
import {
  webSocketInit,
  WebSocketResponse
} from './action-creators';
import * as ActionType from '../action-types';
import { identifyResponse, mapResponseToAction } from '../../backend-api/response';

export const initWebSocket: Epic<RootAction, RootState> = action$ =>
  Observable.forkJoin(
    action$.ofType(ActionType.AUTH_SUCCESS).take(1),
    action$.ofType(ActionType.VERSION_SUCCESS).take(1),
    action$.ofType(ActionType.COUNTRY_CODE_SUCCESS).take(1)
  )
  .map(() => webSocketInit());

export const onWebSocketClosed: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.WEBSOCKET_CLOSED)
    .map(() => push('/closed'));

export const onWebSocketReady: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.WEBSOCKET_READY)
    .map(() => push('/main'));

export const onWebSocketResponse: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.WEBSOCKET_RESPONSE)
    .map(action => action as WebSocketResponse)
    .map(action => identifyResponse(action.payload))
    .map(response => mapResponseToAction(response));

export default combineEpics(
  initWebSocket,
  onWebSocketClosed,
  onWebSocketReady,
  onWebSocketResponse
);
