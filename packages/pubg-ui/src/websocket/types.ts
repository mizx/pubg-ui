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

// export type Request =
//   | [number, null, 'overl', 'GetPartyData']
//   | [number, null, 'UserProxyApi', 'GetAnnouncement']
//   | [number, null, 'UserProxyApi', 'GetUserMatchState']
//   | [number, null, 'UserProxyApi', 'GetOpenGameInfo']
//   | [number, null, 'UserProxyApi', 'GetBroUserStatesBySteamId']
// ;

// export type Request =
//   | ['GetPartyData']
//   | ['GetAnnouncement']
//   | ['GetUserMatchState']
//   | ['GetGameInfo']
//   | ['GetBroUserStatesBySteamId', string[]]
//   | ['RequestMatch', Region, string, FillSquad]
// ;
