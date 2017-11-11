import { AuthResponse } from '.';

if (process.env.NODE_ENV !== 'production') {
  const getAuthData = (): AuthResponse => ({
    accessToken: '408f3157d2637898e36a...',
    appId: '578080',
    platformType: 'Steam',
    playerNetId: '76561197988861...',
    userDisplayName: 'Player Name',
    userSerial: '76561197988861...'
  });

  // window.engine.mock('GetClientAuthData', getAuthData);

  const getGameVersion = () => '1.2.3';
  // window.engine.mock('GetGameVersion', getGameVersion);
}
