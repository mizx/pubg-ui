import { Request, Response, RequestConfig } from './base';
import { Region, SquadSize, Perspective } from '../../redux/option';

export class RequestMatchRequest extends Request {

  constructor(region: Region, squad: SquadSize, perspective: Perspective, autoMatchmake: boolean) {
    const config: RequestConfig = {
      command: 'RequestMatch',
      payload: [region, `${squad}-${perspective}`, autoMatchmake]
    };

    super(config);
  }

}

export class RequestMatchResponse extends Response {

  toActionPayload() {
    return this.data[1];
  }

}
