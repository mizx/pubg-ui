// Type definitions for mock-socket 7.1.0
// Project: https://github.com/thoov/mock-socket
// Definitions by: mizx https://github.com/mizx

/// <reference types="socket.io" />

declare module 'mock-socket' {
    export var WebSocket: WebSocket;
    export var Server: SocketIO.Server;
    export var SocketIO: SocketIOStatic;
}
