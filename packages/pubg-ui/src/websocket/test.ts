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
import { Region, SquadSize, Perspective } from '../options';

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

export type WebSocketCallback = (payload: any[]) => RootAction;

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

  callback(): WebSocketCallback {
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
    addRequestToMap(this.requestId, this.callback());
  }

}
  
export class PartyData extends Request {

  constructor() {
    super('UserProxyApi', 'GetPartyData');
  }

  callback() {
    return (payload: any[]) => partyResponse(payload.slice(2));
  }

}

export class RequestMatch extends Request {
  constructor(
    region: Region,
    squadSize: SquadSize,
    perspective: Perspective,
    autoMatchmake: boolean
  ) {
    super('UserProxyApi', 'RequestMatch', region, `${squadSize}-${perspective}`, autoMatchmake);
  }

  callback() {
    return (payload: any[]) => partyResponse(payload.slice(2));
  }
}
