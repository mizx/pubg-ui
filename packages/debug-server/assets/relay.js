function sendMessage(message, level) {
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

var filterMessages = [
    '%c next state',
    '%c prev state'
]
var wrapLogger = function(fn) {
    const errMsg = "Failed to send message"
    
    return function() {
        fn.apply(this, arguments);
        
        if (!arguments.length || filterMessages.indexOf(arguments[0]) !== -1) { return; }
        try {
            sendMessage(arguments, 'log');
        } catch (error) {
            if (arguments.length > 0 && arguments[0] != errMsg) { 
                fn.apply(this, [errMsg, error, arguments])
            }
            sendMessage(error.message, 'error');
        }
    }
}

window.console.log = wrapLogger(window.console.log)
window.console.info = wrapLogger(window.console.info)
window.console.error = wrapLogger(window.console.error)