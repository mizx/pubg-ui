import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';

import { RootAction } from '../redux';
import {
  webSocketRequest,
  WebSocketRequest,
  partyResponse,
  PartyResponse,
  webSocketError,
  WebSocketError
} from '../redux/action-creators';
import { RequestService, RequestCommand } from './types';

let counter = 10000;

const getRequestId = () => counter++;

export const requestMap: { [key: number]: (payload: any[]) => RootAction} = { };

export const addRequestToMap = (requestId: number, cb: (payload: any[]) => RootAction) => {
  requestMap[requestId] = cb;
};

export class Response {

  public payload: any[];
  public requestId: number;

  constructor(payload: any[]) {
    this.payload = payload;
    this.requestId = payload[0];
  }

  invokeCallback() {
    const callback = requestMap[this.requestId];
    return callback(this.payload);
  }
}

export class Request {
  
  public requestId: number;
  public service: RequestService;
  public command: RequestCommand;
  public data: any[];

  constructor(service: RequestService, command: RequestCommand, ...data: any[]) {
    this.requestId = getRequestId();
    this.service = service;
    this.command = command;
    this.data = data;
  }

  getCallback() {
    return (payload: any[]) => webSocketError('callback not defined');
  }

  getRequest() {
    return [
      this.requestId,
      null,
      this.service,
      this.command,
      ...this.data
    ];
  }

  toAction() {
    this.registerRequest();
    return webSocketRequest(this.getRequest());
  }

  registerRequest() {
    addRequestToMap(this.requestId, this.getCallback());
  }

  onResponse() {
    return;
  }

}
  
export class PartyData extends Request {

  constructor() {
    super('UserProxyApi', 'GetPartyData');
  }

  onResponse(response: any[]) {
    const [ requestId, unknown, noTitle, value] = response;

    console.log('dispatch GetPartyData', value);

    return partyResponse(response);
  }


  getCallback() {
    return (payload: any[]) => partyResponse(payload);
  }

}
