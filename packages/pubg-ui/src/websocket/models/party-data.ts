import { PartyData } from '../../websocket/response';
import { Request, Response, RequestConfig } from './base';

export class PartyDataRequest extends Request {

  constructor() {
    const config: RequestConfig = {
      command: 'GetPartyData'
    };

    super(config);
  }
  
}

export class PartyDataResponse extends Response {

  toActionPayload() {
    return this.data[1] as PartyData;
  }

}
