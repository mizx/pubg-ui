import { Observable } from 'rxjs/Observable';

import { WebSocketConnection } from './connection';
import {
  Announcement,
  AnnouncementModel,
  PartyData,
  PartyDataModel
} from './exchanges';

export class WebSocketRequests extends WebSocketConnection {

  getAnnouncements() {
    const announcement = new Announcement(this.getOptions());

    return announcement.query();
  }

  getPartyData() {
    return new PartyData(this.getOptions()).query();
  }

}

export default new WebSocketRequests();
