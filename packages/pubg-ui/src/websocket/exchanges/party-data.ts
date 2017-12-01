import { Request, RequestBaseOptions } from '../request';

export interface Response {
  // TODO: record party data response
}

// TODO: update model
export class Model {

  party: null;

  constructor(obj: Response) {
    this.party = null;
  }

}

export class PartyData extends Request<Model | null> {
  
    constructor(options: RequestBaseOptions) {
      super({ ...options, command: 'GetPartyData' });
    }
  
    mapResponse(payload: any[]) {
      return payload[3] as null;
    }
  
  }
  