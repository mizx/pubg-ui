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

window.engine.mock('ShowGameOptions', () => log('OPEN OPTIONS'));
window.engine.mock('Quit', () => log('QUIT'));
