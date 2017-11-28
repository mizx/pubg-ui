import { Observable } from 'rxjs/Observable';
import { WebSocketSubject, RequestBaseOptions } from '../types';
import { Base } from './base';

export class Announcement extends Base {

  constructor(options: RequestBaseOptions) {
    super({ ...options, command: 'GetAnnouncement' });
  }

}
