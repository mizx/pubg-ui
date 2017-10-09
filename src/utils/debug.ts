import requestPromise from 'request-promise';

// reference original console methods
const ref = {
  log: console.log,
  error: console.error,
  warn: console.warn
};

const sendError = async (...args: {}[]) => {
  const options = {
    method: 'POST',
    uri: 'http://localhost:3001/log',
    body: args
  };

  try {
    requestPromise(options);
  } catch (e) {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = `<p style="color: #000">POST Debugger Error: ${e.message}</p>`;
  }
};

const windowEventListener = (event: ErrorEvent) => {
  const { message, lineno, filename, type } = event;
  sendError({ message, lineno, filename, type, level: 'error' });
};

// Let the overrides begin
window.addEventListener('error', windowEventListener, true);

console.log = (...args: {}[]) => {
  ref.log(...args);
  sendError({ ...args, level: 'log' });
};

console.error = (...args: {}[]) => {
  ref.error(...args);
  sendError({ ...args, level: 'error' });
};

console.warn = (...args: {}[]) => {
  ref.warn(...args);
  sendError({ ...args, level: 'warn' });
};
