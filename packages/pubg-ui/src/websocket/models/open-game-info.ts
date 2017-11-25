import { OpenGameInfo } from '../../websocket/response';
import { Request, Response, RequestConfig } from './base';

export class OpenGameInfoRequest extends Request {

  constructor() {
    const config: RequestConfig = {
      command: 'GetOpenGameInfo'
    };

    super(config);
  }
  
}

export class OpenGameInfoResponse extends Response {

  toActionPayload() {
    return this.data[1] as OpenGameInfo;
  }
  
}
