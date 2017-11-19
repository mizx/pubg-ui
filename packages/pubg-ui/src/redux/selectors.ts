import { RootState } from './root-reducer';
import { FriendMap } from './friend';
import { OptionState } from './option';

export interface WebSocketArgs {
    provider: string;
    clientGameVersion?: string;
    ticket?: string;
    playerNetId?: string;
    cc?: string;
}

export const getWebSocketArgs = (state: RootState): WebSocketArgs => {
    const {
        platform: provider = 'steam',
        token,
        platformId,
        countryCode,
        version
    } = state.app;

    return {
        provider: provider.toLowerCase(),
        ticket: token,
        playerNetId: platformId,
        cc: countryCode,
        clientGameVersion: version
    };
};

export const getPlayerPlatformName = (state: RootState) => state.profile.platformUsername;
export const getFriends = (state: RootState) => state.friend.friends;
export const getOptions = (state: RootState) => state.option;
export const getVersion = (state: RootState) => state.app.version;
export const isReady = (state: RootState) => state.matchmake.ready;
