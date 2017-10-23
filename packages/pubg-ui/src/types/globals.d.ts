import { Engine } from './engine';

declare global {
  interface Window {
    engine: Engine;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
