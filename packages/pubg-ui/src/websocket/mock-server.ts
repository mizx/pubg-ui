/*
import { Server } from 'mock-socket';
import {
    onConnectionAccepted,
    onGetPartyData
} from './mock-data';

const mockServer = new Server('ws://echo.websocket.org');

mockServer.on('connection', msg => {
    console.log('[mock-socket] connection');
    
    mockServer.send(JSON.stringify( onConnectionAccepted ));
});

mockServer.on('message', msg => {
    switch (msg.type) {
        case 'subscribe':
            console.log('[mock-socket] subscribe');
            break;

        case 'unsubscribe':
            console.log('[mock-socket] unsubscribe');
            break;

        default:
            console.log('[mock-socket] invalid message');
    }
});

mockServer.on('close', msg => {
    console.log('[mock-socket] close');
});
*/
