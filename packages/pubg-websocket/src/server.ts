import { Server } from 'ws';

const wss = new Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`received ${message}`);
  });

  ws.send('something');
});
