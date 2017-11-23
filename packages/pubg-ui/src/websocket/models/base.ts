import { RequestService, RequestCommand } from '../types';
import { requestMap } from '../constants';

export interface RequestConfig {
  service?: RequestService;
  command: RequestCommand;
  payload?: any[];
}

export class Request {
  
  requestId: number;
  service: RequestService = 'UserProxyApi';
  command: RequestCommand;
  payload: any[];

  constructor(config: RequestConfig) {
    this.service = config.service || 'UserProxyApi';
    this.command = config.command;
    this.payload = config.payload || [];
    this.requestId = requestMap[this.command];
  }

  getCommon(): any[] {
    return [this.requestId, null, this.service, this.command];
  }
  
  toWebSocketPayload(): any[] {
    return [this.getCommon(), ...this.payload];
  }

}

export class Response {

  responseId: number;
  data: any[];

  cosntructor(response: any[]) {
    const [ responseId, unknown, ...rest] = response;

    this.responseId = responseId;
    this.data = rest;
  }

  toActionPayload(): any {
    return this.data;
  }
  
}
