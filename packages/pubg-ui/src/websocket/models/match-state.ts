import { MatchState } from '../../websocket/response';
import { Request, Response, RequestConfig } from './base';

export class MatchStateRequest extends Request {

  constructor() {
    const config: RequestConfig = {
      command: 'GetUserMatchState'
    };

    super(config);
  }
  
}

export class MatchStateResponse extends Response {

  /**
   * TODO: What are the possible match states?
   * Potentially put them in an enum if all responses are ints.
   */
  toActionPayload() {
    return this.data[1] as MatchState;
  }

}
