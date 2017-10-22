import { PreferenceOptions, Region, SquadSize, Perspective, SetPreference } from '../preferences';

export interface Authentication {
  accessToken: string;      // 468 character hex string
  appId: string;            // "578080"
  platformType: string;     // "Steam"
  playerNetId: string;      // "76561197988861..."
  userDisplayName: string;  // steam name
  userSerial: string;       // "76561197988861..."
}

export interface ProviderState {
  auth: Authentication | null;
  preference: PreferenceOptions;
}

export interface ProviderContext {
  pubg: {
    auth: Authentication | null;
    preference: PreferenceOptions;
    action: ProviderAction;
  };
}

export interface ProviderAction {
  setPreference: SetPreference;
}
