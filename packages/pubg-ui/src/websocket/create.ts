import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/observable/dom/WebSocketSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import store from '../redux/store';
import {
  webSocketReady,
  webSocketResponse,
  webSocketError,
  webSocketClosed
} from '../redux/action-creators';

export const queue = new ReplaySubject<any[]>();

export const createWebSocket = () => {
  const close$ = new Subject<CloseEvent>();
  const open$ = new Subject<Event>();
  
  open$.subscribe(event => store.dispatch(webSocketReady()));
  close$.subscribe(event => store.dispatch(webSocketClosed(event.reason)));

  const config: WebSocketSubjectConfig = {
    url: 'ws://echo.websocket.org',
    openObserver: open$,
    closeObserver: close$
  };

  const webSocket = Observable.webSocket(config);

  webSocket.subscribe(p => console.log('event', p));
  
  queue
    .map(data => JSON.stringify(data))
    .subscribe(webSocket);

  return webSocket;
};
