import { RequestCommand } from './types';

export type ResponseMap = { [key in RequestCommand]: number };
export const requestMap: ResponseMap = {
  GetPartyData: 100,
  GetAnnouncement: 101,
  GetUserMatchState: 102,
  GetOpenGameInfo: 103,
  GetBroUserStatesBySteamId: 104,
  RequestMatch: 105
};
