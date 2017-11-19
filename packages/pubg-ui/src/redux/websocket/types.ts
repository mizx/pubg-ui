import { InviteAllow } from '../friend';

export interface WebSocketArgs {
  provider: string;
  clientGameVersion?: string;
  ticket?: string;
  playerNetId?: string;
  cc?: string;
}

export type RequestId = number;
export type Unknown = null; // all are null?
export type Service = 'UserProxyApi';
export type Command = 
  | 'GetPartyData'
  | 'GetAnnouncement'
  | 'GetUserMatchState'
  | 'GetOpenGameInfo'
  | 'GetUserMatchState'
  | 'GetOpenGameInfo'
  | 'GetBroUserStatesBySteamId'
  | 'RequestMatch'
;

export interface ConnectionAcceptedResponse {
  account: {
    AccountId: string;
    partnerId: string | null,
    Region: string; // TODO: can this be null? make option static typed?
  };
  inventory: null;
  inviteAllow: InviteAllow;
  playinggame: null; // TODO: what are the options?
  profile: {
    InviteAllow: InviteAllow,
    Nickname: string; // TODO: can be null if not set?
    ProfileStatus: null,
    Skin: {
      Face: string;
      Gender: string;
      Hair: string;
      Presets: string;
    },
    record: null
  };
}
