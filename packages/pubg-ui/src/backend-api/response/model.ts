export type ResponseService =
  | 'ClientApi'
  | 'Unknown'
;

export type ResponseCommand =
  | 'ConnectionAccepted'
  | 'Invalidate'
  | 'InventoryInitialized'
;

export interface ResponseModel {
  requestId: number;
  unknown: null;
  // service: string;
  // data: Object;
}

export interface Response {
  new (...response: any[]): Response;
  
  toModel(): ResponseModel;
}

export class BaseResponse implements ResponseModel {

  protected response: any[];
  
  // response is the raw data we get from websocket
  constructor(...response: any[]) {
    this.response = response;
  }

  public get requestId(): number {
    return this.response[0] || 0;
  }

  public get unknown(): null {
    return this.response[1] || null;
  }

  public get service(): ResponseService {
    const service = this.response[2];

    if (typeof service === 'string') {
      return service as ResponseService;
    }
    return 'Unknown';
  }

  public toModel() {
    return {
      requestId: this.requestId,
      unknown: null
    };
  }

}
