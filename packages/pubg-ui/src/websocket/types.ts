import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { Region, SquadSize, Perspective } from '../redux/option';

export interface RequestBaseOptions {
  webSocket: WebSocketSubject<{}>;
  requestId: number;
}

export interface RequestOptions extends RequestBaseOptions {
  command: RequestCommand;
  service?: RequestService;
  payload?: any[];
}

export type WebSocketSubject = WebSocketSubject<{}>;

export type FillSquad = boolean;

export type RequestService = 'UserProxyApi';

export type RequestCommand = 
  | 'GetPartyData'
  | 'GetAnnouncement'
  | 'GetUserMatchState'
  | 'GetOpenGameInfo'
  | 'GetBroUserStatesBySteamId'
  | 'RequestMatch'
;
