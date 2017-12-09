function websocket_override() {
    var ws = window.WebSocket;

    window.WebSocket = function (a, b) {
       var that = b ? new ws(a, b) : new ws(a);
       that.addEventListener("open", console.info.bind(console, "[websocket] open"));
       that.addEventListener("close", console.info.bind(console, "[websocket] close"));
       that.addEventListener("message", console.info.bind(console, "[websocket] msg"));
       
       that.send = function (send) {
         return function (data) {
           console.log("[websocket] send", this, data);
           return send.apply(this, arguments);
         };
       }(window.WebSocket.prototype.send);
       
       return that;
       
    };

    window.WebSocket.prototype=ws.prototype; 
}

/* document.addEventListener('DOMContentLoaded', function () {
    websocket_override();
}); */

setTimeout(function() {
    _onmessage = window.WebSocket.onmessage
    window.WebSocket.onemessage = function(msg) {
        console.log('hi');
        _onmessage.apply(msg)
    }
}, 2000)