import { webSocket } from 'rxjs/observable/dom/webSocket';
import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/observable/dom/WebSocketSubject';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import store from '../redux/store';
import {
  webSocketReady,
  webSocketResponse,
  webSocketError,
  webSocketClosed
} from '../redux/app';

const close$ = new Subject<CloseEvent>();
const open$ = new Subject<Event>();
const queue$ = new ReplaySubject<any>();

const config: WebSocketSubjectConfig = {
  url: 'ws://echo.websocket.org',
  openObserver: open$,
  closeObserver: close$
};

// TODO: make a queue observable to pass to socket$

/**
 * We will eventually need this to start after WEBSOCKET_INIT action is called
 */
export const socket$ = webSocket(config);

// TODO: need to include a closed observable 
socket$.subscribe(
  (payload) => store.dispatch(webSocketResponse(payload as any[])),
  (err) => store.dispatch(webSocketError(err)), // FIXME: this is either an Error or Event
  () => store.dispatch(webSocketClosed('closed')) // TODO: remove? using close$ subject
);

open$.subscribe(
  (event) => store.dispatch(webSocketReady())
);

close$.subscribe(
  (event) => store.dispatch(webSocketClosed(event.reason))
);
