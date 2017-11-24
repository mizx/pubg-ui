import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/observable/dom/WebSocketSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';

import store from '../redux/store';
import {
  webSocketReady,
  webSocketResponse,
  webSocketError,
  webSocketClosed
} from '../redux/action-creators';
import { WebSocketArgs } from '../redux/websocket';
import { RequestCommand, RequestService } from './types';

import { Server } from 'mock-socket';

export const queue = new ReplaySubject<any[]>();

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

  const test1 = webSocket.multiplex(
    () => JSON.stringify([1000, null, 'GetPlayerData']),
    () => { throw new Error('test'); },
    (value: any) => value[0] === 1000
  );

  // webSocket.subscribe(p => console.log('event', p));
  
  // queue
  //   .map(request => JSON.stringify(request))
  //   .subscribe(webSocket);

  return webSocket;
};

let webSocketRef: WebSocketSubject<{}> | undefined;

export { webSocketRef };
export function setWebSocketRef(webSocket: WebSocketSubject<{}>) {
  webSocketRef = webSocket;
}
