export interface Engine {
  on: (name: string, callback: Function, context: Object) => void;
  off: (name: string, callback: Function, context: Object) => void;
  trigger: (name: string, args?: {}) => void;
  call: (name: string, args?: {}) => void;
}

declare global {
  interface Window {
    engine: Engine;
  }
}
