import { webSocket } from 'rxjs/observable/dom/webSocket';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';

import store from '../redux/store';
import { webSocketResponse } from '../redux/app';

const WEBSOCKET_URL = 'ws://echo.websocket.org';

export const socket$ = webSocket(WEBSOCKET_URL);

export const doRequest = (random: number) => {
  socket$.next(random);
}

socket$.subscribe(
  (msg) => store.dispatch(webSocketResponse(msg as number)),
  (err) => console.error('error:', err),
  () => console.log('socket complete')
);
