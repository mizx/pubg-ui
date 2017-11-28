import {
  RequestOptions,
  RequestBaseOptions,
  WebSocketSubject,
  RequestCommand,
  RequestService
} from '../types';

export class Base {

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
    this.payload = options.payload || [];
  }

  getRequest() {
    const request = [
      this.requestId,
      null,
      this.service,
      this.command,
      // this array spread operator will not include an empty array
      ...this.payload
    ];

    return () => JSON.stringify(request);
  }

  requestError() {
    return () => new Error('noop');
  }

  // TODO: this will be a negative response value
  filterCheck() {
    return (value: any) => value[0] === this.requestId;
  }
}
