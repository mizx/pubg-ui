import { EngineFriendResponse } from '../types'

// tslint:disable-next-line:no-console
const log = (...message: string[]) => console.log(...message);

const getGameVersion = () => '1.2.3';
window.engine.mock('GetGameVersion', getGameVersion, false);

const openWebPage = (url: string) => window.open(url, '_blank');

const openPlatformUrl = (url: string) => {
  log('OPEN URL (PLATFORM):', url);
  openWebPage(url);
};
window.engine.mock('ShowWebPageOnPlatform', openPlatformUrl);

const openExternalUrl = (url: string) => {
  log('OPEN URL (EXTERNAL):', url);
  openWebPage(url);
};
window.engine.mock('OpenExternalBrowser', openExternalUrl);

window.engine.mock('ShowGameOption', () => log('OPEN OPTIONS'));
window.engine.mock('Quit', () => log('QUIT'));

window.engine.mock('GetClientAuthData', () => ({
  accessToken: '408f3157d2637898e36a...',
  appId: '578080',
  platformType: 'Steam',
  playerNetId: '76561197988861...',
  userDisplayName: 'Player Name',
  userSerial: '76561197988861...'
}));

const getRandomFriend = (): EngineFriendResponse => ({
  userSerial: `7656119${Math.round(Math.random() * 10000000000)}`,
  userRealName: 'Real name',
  userDisplayName: 'Display name',
  presence: {
    isOnline: Math.random() >= 0.5,
    isPlaying: Math.random() >= 0.5,
    isPlayingThisGame: (Math.random() >= 0.5),
    isJoinable: Math.random() >= 0.5,
    status: 0
  }
})

const onReadFriendsList = () => {
  const friends: EngineFriendResponse[] = [
    getRandomFriend(),
    getRandomFriend()
  ];

  window.engine.trigger('ReadFriendListResult', 1, null, friends);
};
window.engine.mock('ReadFriendList', onReadFriendsList);
