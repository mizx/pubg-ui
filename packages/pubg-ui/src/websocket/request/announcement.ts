import { Observable } from 'rxjs/Observable';
import { WebSocketSubject, RequestBaseOptions } from '../types';
import { Base } from './base';
import { Announcement as AnnouncementResponse } from '../response';

export class Announcement extends Base<AnnouncementResponse[]> {

  constructor(options: RequestBaseOptions) {
    super({ ...options, command: 'GetAnnouncement' });
  }

  mapResponse(payload: any[]) {
    return payload[3] as AnnouncementResponse[];
  }

}
