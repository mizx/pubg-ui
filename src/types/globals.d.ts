export interface Engine {
  on: (name: string, callback: Function, context: Object) => void;
  off: (name: string, callback: Function, context: Object) => void;
  trigger: (name: string, args?: {}) => void;
  call: <T>(name: string, args?: {}) => Promise<T>;
  mock: (name: string, callback: Function, isEvent: boolean) => void;
  isAttached: boolean;
}

declare global {
  interface Window {
    engine: Engine;
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
