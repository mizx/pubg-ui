import { combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import { RootAction, RootState } from '..';
import {
  webSocketInit,
  WebSocketInit,
  webSocketError,
  webSocketResponse,
  WebSocketResponse,
  webSocketClosed,
  webSocketReady
} from './action-creators';
import * as ActionType from '../action-types';
import webSocket from '../../websocket';
import { getWebSocketArgs } from '../selectors';

export const initWebSocket: Epic<RootAction, RootState> = (action$, store) =>
  Observable.forkJoin(
    action$.ofType(ActionType.AUTH_SUCCESS).take(1),
    action$.ofType(ActionType.VERSION_SUCCESS).take(1),
    action$.ofType(ActionType.COUNTRY_CODE_SUCCESS).take(1)
  )
  .map(() => webSocketInit(getWebSocketArgs(store.getState())));

export const onWebSocketClosed: Epic<RootAction, RootState> = action$ =>
  webSocket.close$
    .map(event => webSocketClosed(event.reason));

export const onWebSocketReady: Epic<RootAction, RootState> = action$ =>
  webSocket.open$
    .map(event => webSocketReady());

export const onWebSocketInit: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.WEBSOCKET_INIT)
    .switchMap(action => 
      webSocket.init((action as WebSocketInit).payload)
        .map(payload => webSocketResponse(payload as any[]))
        .catch(error => Observable.of(webSocketError(error)))
    );

export default combineEpics(
  initWebSocket,
  onWebSocketClosed,
  onWebSocketReady,
  onWebSocketInit
);
