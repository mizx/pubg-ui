import { Observable } from 'rxjs/Observable';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { Announcement } from 'websocket/response';

type MultiplexSub = () => any;
type MultiplexUnSub = () => any;
type MultiplexFilter = (value: {}) => boolean;

export type Multiplex = (
  sub: () => any,
  unsub: () => any,
  value: (value: {}) => boolean
) => Observable<any>;

export interface RequestConfig {
  command: string;
  service?: string;
  payload?: any[];
}

export type RequestConfigOrString = string | RequestConfig;

let counter = 10000;
const getRequestId = () => counter++;

export class BaseMultiplex {

  private requestId: number;
  private command: string;
  private service: string = 'UserProxyApi';
  private requestPayload: any[];
  private responsePayload: any[];
  private webSocket: WebSocketSubject<{}>;

  constructor(webSocket: WebSocketSubject<{}>, config: RequestConfigOrString) {
    this.requestId = getRequestId();

    this.webSocket = webSocket;

    if (typeof config === 'string') {
      this.command = config;
    } else {
      this.command = config.command;
      this.service = config.service || 'UserProxyApi';
      this.requestPayload = config.payload || [];
    }
  }

  getRequest() {
    return [this.requestId, null, this.service, this.command, ...this.requestPayload];
  }

  getUnsub() {
    throw new Error('noop');
  }

  checkRequestId(value: any[]) {
    return value[0] === this.requestId;
  }

  onResponse(payload: any[]) {
    this.responsePayload = payload;
  }

  generateMultiplex() {
    return this.webSocket.multiplex(
      () => this.getRequest(),
      () => this.getUnsub(),
      (value) => this.checkRequestId(value as any[])
    );
  }

  getMultiplex() {
    return this.generateMultiplex()
      .take(1);
  }
}

export class AnnouncementMultiplex extends BaseMultiplex {

  constructor(webSocket: WebSocketSubject<{}>) {
    super(webSocket, 'GetAnnouncement');
  }

  getMultiplex() {
    return super.getMultiplex()
      .map(response => response[3] as Announcement[]);
  }

}
