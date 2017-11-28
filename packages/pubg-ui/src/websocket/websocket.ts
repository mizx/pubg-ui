import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/observable/dom/WebSocketSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import store from '../redux/store';
import { Announcement } from './request/announcement';
import { WebSocketArgs } from '../redux/websocket';
import { RequestBaseOptions } from './types';
import { Announcement as AnnouncementResponse } from './response'

const WEBSOCKET_URL = 'ws://echo.websocket.org';

export class WebSocketConnection {

  public webSocket: WebSocketSubject<{}>;
  public close$ = new Subject<CloseEvent>();
  public open$ = new Subject<Event>();
  private requestId = 10000;

  public init(options: WebSocketArgs) {
    const config: WebSocketSubjectConfig = {
      url: WEBSOCKET_URL,
      openObserver: this.open$,
      closeObserver: this.close$
    };
    
    this.webSocket = Observable.webSocket(config);
    return this.webSocket;
  }

  protected getRequestId() {
    return this.requestId++;
  }

  protected getOptions(): RequestBaseOptions {
    return {
      webSocket: this.webSocket,
      requestId: this.getRequestId()
    };
  }

}

export class WebSocketRequests extends WebSocketConnection {

  getAnnouncements() {
    const announcement = new Announcement(this.getOptions());

    return announcement.query();
  }
}

export default new WebSocketRequests();
