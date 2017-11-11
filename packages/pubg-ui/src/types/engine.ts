export interface Engine {
  on: (name: string, callback: Function, context?: Object) => void;
  off: (name: string, callback: Function, context?: Object) => void;
  trigger: (name: string, ...args: any[]) => void;
  call: <T>(name: string, ...args: any[]) => Promise<T>;
  mock: (name: string, callback: Function, isEvent?: boolean) => void;
  isAttached: boolean;
  AddOrRemoveOnHandler: any;
}
