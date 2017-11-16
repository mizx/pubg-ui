import { webSocket } from 'rxjs/observable/dom/webSocket';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';

import store from '../redux/store';
import { webSocketResponse } from '../redux/app';

const WEBSOCKET_URL = 'ws://echo.websocket.org';

// TODO: make a queue observable to pass to socket$

/**
 * We will eventually need this to start after WEBSOCKET_INIT action is called
 */
export const socket$ = webSocket(WEBSOCKET_URL);

/**
 * the 1st callback will eventually need to go to a switch statement
 * of some kind. We'll also probably have to keep an incrementing
 * counter to map responses back to their request.
 */
socket$.subscribe(
  (msg) => store.dispatch(webSocketResponse(msg as number)),
  (err) => console.error('error:', err),
  () => console.log('socket complete')
);
