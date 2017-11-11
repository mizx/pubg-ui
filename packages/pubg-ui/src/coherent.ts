window.engine = {
  on: function(name: string, callback: Function, context?: Object) {
    console.log('on', name);
  },
  off: function(name: string, callback: Function, context?: Object) {
    console.log('off', name);
  },
  trigger: function(name: string, ...args: any[]) {
    console.log('trigger', name, args);
  },
  call: function<T>(name: string, ...args: any[]) {
    console.log('call', name, args);

    const promise = new Promise<T>(function(resolve, reject) {
      resolve('it works' as any);
    });

    return promise;
  },
  mock: function(name: string, callback: Function, isEvent?: boolean) {
    console.log('mock', name);
  },
  isAttached: false
};
