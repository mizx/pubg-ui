import { InviteAllow } from '../friend';

export type Platform = 'Steam';

export interface AuthResponse {
  accessToken: string;      // 468 character hex string
  appId: string;            // "578080"
  platformType: Platform;   // "Steam"
  playerNetId: string;      // 64bit SteamID
  userDisplayName: string;  // Steam name
  userSerial: string;       // 64bit SteamID
}

export interface CountryCodeResponse {
  country_code: string;
}


export type WebSocketRequestId = number;
export type WebSocketUnknown = null; // all are null?
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

export type WebSocketResponsePayload = any[];

export interface ConnectionAcceptedResponse {
  account: {
    AccountId: string;
    partnerId: string | null,
    Region: string; // TODO: can this be null? make option static typed?
  },
  inventory: null;
  inviteAllow: InviteAllow,
  playinggame: null, // TODO: what are the options?
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
  }
}
