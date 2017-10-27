export type InviteAllow = null | 'all' | 'friend';
export type FriendState = '' | 'play' | 'offline' | 'party';

export interface SocketFriendResponse {
  AccountId: string;      // PUBG ID?
  AvatarUrl: string;      // Steam Avatar URL
  InviteAllow: InviteAllow;
  Nickname: string;       // PUBG Nickname
  State: FriendState;
  SteamId: string;        // 64bit SteamID
  SteamName: string;      // Public steam name
}

/*
 * guessing on this part, basing it off of:
 * https://developer.valvesoftware.com/wiki/Steam_Web_API
 */
export enum SteamOnlineState {
  Offline = 0, // or Private
  Online,
  Busy,
  Away,
  Snooze,
  LookingToTrade,
  LookingToPlay
}

export interface EngineFriendResponse {
  userSerial: string; // 64bit SteamID
  userRealName: string;
  userDisplayName: string;
  presence: {
    isOnline: boolean;
    isPlaying: boolean;
    isPlayingThisGame: boolean;
    isJoinable: boolean;
    status: SteamOnlineState;
  }
}
