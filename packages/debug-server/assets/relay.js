function sendError(message, level) {
  var body = JSON.stringify({
    message: message,
    level: level
  });

  $.ajaxQueue({
    url: '/log',
    type: 'POST',
    data: body,
    contentType: 'application/json',
    dataType: 'json',
    success: null
  });
}

// setTimeout(function () {
//   sendError('Timeout Error', 'warning');
// }, 5000);
//
// document.addEventListener('DOMContentLoaded', function () {
//   sendError([].slice.call(arguments), 'warning');
// });

var consoleLog = window.console.log;
var consoleWarn = window.console.warn;
var consoleError = window.console.error;

window.console.log = function() {
  try {
    sendError(arguments, 'log');
  } catch (error) {
    sendError(error.message, 'error');
  }
}
//
// window.console.warn = function() {
//   consoleWarn.call(arguments);
//   sendError(arguments, 'warn');
// }
//
// window.console.error = function() {
//   consoleError.call(arguments);
//   sendError(arguments, 'error');
// }
