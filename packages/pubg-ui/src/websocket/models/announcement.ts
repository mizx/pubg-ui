import { Announcement } from '../../websocket/response';
import { Request, Response, RequestConfig } from './base';

export class AnnouncementRequest extends Request {

  constructor() {
    const config: RequestConfig = {
      command: 'GetAnnouncement'
    };

    super(config);
  }

}

export class AnnouncementResponse extends Response {
  
    toActionPayload() {
      return this.data[1] as Announcement[];
    }
  
  }
