import { RootState } from './root-reducer';
import { FriendMap } from './friend';
import { OptionState } from './option';

export type Selector<T> = (state: RootState)  => T;

export interface WebSocketArgs {
    provider: string;
    clientGameVersion?: string;
    ticket?: string;
    playerNetId?: string;
}

const getWebSocketArgs: Selector<WebSocketArgs> = state => {
    const {
        platform: provider = 'steam',
        session,
        version
    } = state.app;

    return {
        provider: provider.toLowerCase(),
        clientGameVersion: version,
        ticket: session.token,
        playerNetId: session.playerNetId
    };
}

export const getPlayerPlatformName: Selector<string | undefined> = state => state.profile.platformUsername;
export const getFriends: Selector<FriendMap> = state => state.friend.friends;
export const getOptions: Selector<OptionState> = state => state.option;
export const getVersion: Selector<string | undefined> = state => state.app.version;