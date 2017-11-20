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
import { WebSocketArgs } from '../redux/websocket';
import { Request } from './types';

import { Server } from 'mock-socket';

export const queue = new ReplaySubject<Request>();

// if (process.env.NODE_ENV !== 'production') {
//     require('./mock-server');
// }

export const createWebSocket = (args: WebSocketArgs) => {
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

  let counter = 10000;
  
  queue
    .map(request => [counter++, null, 'UserProxyApi', ...request])
    .map(request => JSON.stringify(request))
    .subscribe(webSocket);

  return webSocket;
};

queue.next(['GetPartyData']);
queue.next(['RequestMatch', 'na', 'solo-fpp', false]);
