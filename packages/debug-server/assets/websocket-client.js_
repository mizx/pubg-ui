var fakeWebSocketParams = "?provider=steam&ticket=123123123123&playerNetId=123123123123&cc=US&clientGameVersion=2.6.36";

var ws = new WebSocket("wss://localhost:443/userproxy" + fakeWebSocketParams);
ws.onopen = function() {
    console.log("WEBSOCKET OPEN");
    ws.send("Hello, world");
};
ws.onmessage = function (evt) {
    console.log("WEBSOCKET", evt.data);
};
