import { Engine } from './engine';

declare global {
  interface Window {
    engine: Engine;
  }
}
