export type InviteAllow = null | 'all' | 'friend';
export type FriendState = '' | 'play' | 'offline' | 'party';

export interface Friend {
  AccountId: string;      // PUBG ID?
  AvatarUrl: string;      // Steam Avatar URL
  InviteAllow: InviteAllow;
  Nickname: string;       // PUBG Nickname
  State: FriendState;
  SteamId: string;        // 64bit SteamID
  SteamName: string;      // Public steam name
}
