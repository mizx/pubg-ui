const getGameVersion = () => '1.2.3';

window.engine.mock('GetGameVersion', getGameVersion, false);

const showWebPageOnPlatform = (url: string) => window.open(url, '_blank');

window.engine.mock('ShowWebPageOnPlatform', showWebPageOnPlatform);
