export type InviteState = 'all' | 'friend' | null;
export type OnlineState = 'offline' | 'party';

export interface Announcement {
  Id: string;
  Message: string;
  RegDate: string;
}

export interface OpenGameInfo {
  CurrentSeason: string;
  IsSeasonOff: boolean;
  MatchDescsByRegionAndPartyType: {
    [key: string]: {
      [key: string]: string;
    }
  };
  Options: null;
}

export interface Friend {
  AccountId: string;
  AvatarUrl: string;
  InviteAllow: InviteState;
  Nickname: string;
  State: OnlineState;
  SteamId: string;
  SteamName: string;
}

export type PartyData = null;
export enum MatchState {
  NotInGame = 0
}
