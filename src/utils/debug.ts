import requestPromise from 'request-promise';

// reference original console methods
const ref = {
  log: console.log,
  error: console.error,
  warn: console.warn
};

type Level = 'error' | 'warn' | 'log';

const sendError = async (message?: {}, level?: Level) => {
  const options = {
    method: 'POST',
    uri: 'http://localhost:3001/log',
    json: true,
    body: { message, level }
  };

  try {
    requestPromise(options);
  } catch (e) {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = `<p style="color: #000">POST Debugger Error: ${e.message}</p>`;
  }
};

const windowEventListener = (event: ErrorEvent) => {
  sendError(event.message, 'error');
};

// Let the overrides begin
window.addEventListener('error', windowEventListener, true);

console.log = (message?: {}, ...optionalParams: {}[]) => {
  ref.log(message, ...optionalParams);
  sendError(message, 'log');
};

console.error = (message?: {}, ...optionalParams: {}[]) => {
  ref.error(message, ...optionalParams);
  sendError(message, 'error');
};

console.warn = (message?: {}, ...optionalParams: {}[]) => {
  ref.warn(message, ...optionalParams);
  sendError(message, 'warn');
};
