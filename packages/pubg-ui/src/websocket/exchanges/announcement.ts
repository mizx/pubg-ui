import { Request, RequestBaseOptions } from '../request';

export interface Response {
  Id: string;
  Message: string;
  RegDate: string;
}

export class Model {

  id: string;
  message: string;
  date: Date;

  constructor(obj: Response) {
    this.id = obj.Id;
    this.message = obj.Message;
    this.date = new Date(obj.RegDate);
  }

}

// Helper
export const toAnnouncements = (announcements: Response[]) => (
  announcements.map(announcement => new Model(announcement))
);

export class Announcement extends Request<Model[]> {
  
    constructor(options: RequestBaseOptions) {
      super({ ...options, command: 'GetAnnouncement' });
    }
  
    mapResponse(payload: any[]) {
      return toAnnouncements(payload[3]);
    }
  
  }
  