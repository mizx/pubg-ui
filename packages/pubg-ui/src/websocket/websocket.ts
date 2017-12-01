import { Observable } from 'rxjs/Observable';

import { WebSocketConnection } from './connection';
import { Announcement, AnnouncementModel } from './exchanges';

export class WebSocketRequests extends WebSocketConnection {

  getAnnouncements() {
    const announcement = new Announcement(this.getOptions());

    return announcement.query();
  }

}

export default new WebSocketRequests();
