const WebSocket = require('ws');
const http = require('http');

const server = http.createServer((req, res) => {
  // Handle HTTP requests if needed
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
  
    // Send a welcome message to the connected client
    ws.send(JSON.stringify({ text: 'Welcome! Type your message...', sender: 'system' }));
  
    ws.on('message', (message) => {
      const parsedMessage = JSON.parse(message);
  
      if (parsedMessage.type === 'chat' && parsedMessage.text) {
        // Send user messages only to the admin
        ws.send(JSON.stringify({ text: parsedMessage.text, sender: 'user' }));
      }
    });
  
    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
  