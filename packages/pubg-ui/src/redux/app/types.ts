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
