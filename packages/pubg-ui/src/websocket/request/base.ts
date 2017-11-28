import { Observable } from 'rxjs/Observable';

import {
  RequestOptions,
  RequestBaseOptions,
  WebSocketSubject,
  RequestCommand,
  RequestService
} from '../types';

export class Base<T> {

  private webSocket: WebSocketSubject;
  private requestId: number;
  private command: RequestCommand;
  private service: RequestService;
  private payload: any[];

  constructor(options: RequestOptions) {
    this.webSocket = options.webSocket;
    this.requestId = options.requestId;
    this.command = options.command;
    this.service = options.service || 'UserProxyApi';
    this.payload = [];
  }

  public query(): Observable<T> {
    return this.getMultiplex()
      .take(1) // expecting 1 callback, call complete and unsubscribe
      .map(this.mapResponse);
  }

  public setRequestPayload(payload: any[]) {
    this.payload = payload;
  }

  protected mapResponse(payload: any): T {
    return payload;
  }

  private getSerializedRequest() {
    const request = [
      this.requestId,
      null,
      this.service,
      this.command,
      // this array spread operator will not include an empty array
      ...this.payload
    ];

    return JSON.stringify(request);
  }

  /**
   * WebSocketSubject requires an unsubscribe.
   * If it's an error object, it ignores. So
   * respond with an error for now.
   */
  private getRequestError() {
    throw new Error('noop');
  }

  // TODO: this will be a negative response value
  private filterCheck(value: any) {
    return value[0] === this.requestId;
  }

  private getMultiplex() {
    return this.webSocket.multiplex(
      () => this.getSerializedRequest(),
      () => this.getRequestError(),
      (value: any) => this.filterCheck(value)
    );
  }

}
