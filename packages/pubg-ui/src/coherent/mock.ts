// tslint:disable-next-line:no-console
const log = (...message: string[]) => console.log(...message);

window.engine.mock('ShowGameOption', () => log('OPEN OPTIONS'));
window.engine.mock('Quit', () => log('QUIT'));
