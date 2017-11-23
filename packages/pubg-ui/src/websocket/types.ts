import { Region, SquadSize, Perspective } from '../redux/option';

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
