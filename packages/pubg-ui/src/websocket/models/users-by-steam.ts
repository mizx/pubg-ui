import { Friend } from '../../websocket/response';
import { Request, Response, RequestConfig } from './base';

export class UsersBySteamIdsRequest extends Request {

  constructor(steamIds: string[]) {
    const config: RequestConfig = {
      command: 'GetBroUserStatesBySteamId',
      payload: [steamIds]
    };

    super(config);
  }
  
}

export class UsersBySteamIdsResponse extends Response {

  toActionPayload() {
    return this.data[1] as Friend[];
  }
  
}
