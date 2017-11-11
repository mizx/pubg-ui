import { RootState } from './root-reducer';

const getWebSocketArgs = (state: RootState) => {
    const { platform: provider = 'steam', version: clientGameVersion } = state.app;
    const { token: ticket, playerNetId } = state.app.session;

    return {
        provider: provider.toLowerCase(),
        clientGameVersion,
        ticket,
        playerNetId
    };
}