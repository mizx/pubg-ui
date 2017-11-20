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
  webSocketClosed
} from './action-creators';
import * as ActionType from '../action-types';
import { identifyResponse, mapResponseToAction } from '../../backend-api/response';
import { createWebSocket } from '../../websocket';
import { getWebSocketArgs } from '../selectors';
import { requestMap, Response } from '../../websocket/test';

export const initWebSocket: Epic<RootAction, RootState> = (action$, api) =>
  Observable.forkJoin(
    action$.ofType(ActionType.AUTH_SUCCESS).take(1),
    action$.ofType(ActionType.VERSION_SUCCESS).take(1),
    action$.ofType(ActionType.COUNTRY_CODE_SUCCESS).take(1)
  )
  .map(() => webSocketInit(getWebSocketArgs(api.getState())));

export const onWebSocketClosed: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.WEBSOCKET_CLOSED)
    .map(() => push('/closed'));

export const onWebSocketReady: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.WEBSOCKET_READY)
    .map(() => push('/main'));

// export const onWebSocketResponse: Epic<RootAction, RootState> = action$ =>
//   action$.ofType(ActionType.WEBSOCKET_RESPONSE)
//     .map(action => action as WebSocketResponse)
//     .map(action => identifyResponse(action.payload))
//     .map(response => mapResponseToAction(response));
export const onWebSocketResponse: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.WEBSOCKET_RESPONSE)
    .map(action => new Response((action as WebSocketResponse).payload))
    .map(response => response.invokeCallback());
    // .map(() => webSocketClosed('test'));

export const onWebSocketInit: Epic<RootAction, RootState> = action$ =>
  action$.ofType(ActionType.WEBSOCKET_INIT)
    .mergeMap(action => 
      createWebSocket((action as WebSocketInit).payload)
        .map(payload => webSocketResponse(payload as any[]))
        .catch(error => Observable.of(webSocketError(error))
    ));

export default combineEpics(
  initWebSocket,
  onWebSocketClosed,
  onWebSocketReady,
  onWebSocketResponse,
  onWebSocketInit
);
