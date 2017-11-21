import { RootState } from './root-reducer';
import { FriendMap } from './friend';
import { OptionState } from './option';
import { WebSocketArgs } from './websocket';

export const getWebSocketArgs = (state: RootState): WebSocketArgs => {
  const {
    platform,
    token,
    platformId,
    countryCode,
    version
  } = state.app;
  
  return {
    provider: platform!.toLowerCase(),
    ticket: token!,
    playerNetId: platformId!,
    cc: countryCode!,
    clientGameVersion: version!
  };
};

export const getPlayerPlatformName = (state: RootState) => state.profile.platformUsername;
export const getFriends = (state: RootState) => state.friend.friends;
export const getOptions = (state: RootState) => state.option;
export const getVersion = (state: RootState) => state.app.version;
export const isReady = (state: RootState) => state.matchmake.ready;
