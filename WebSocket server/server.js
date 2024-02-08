const WebSocket = require('ws');
const http = require('http');

const server = http.createServer((req, res) => {
  // Handle HTTP requests if needed
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send a welcome message to the connected client
  ws.send(JSON.stringify({ text: 'Hello! how can we help you?', sender: 'system' }));

  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message);

    if (parsedMessage.type === 'chat' && parsedMessage.text) {
      // Check if this is the first user message
      if (!ws.isFirstMessageReceived) {
        // Send a second message after receiving the first user message
        ws.send(JSON.stringify({ text: 'Wait a moment as we connect you to someone...', sender: 'system' }));
        
        // Directly connect this user to you (admin)
        ws.admin = true;
        // Broadcast a message to notify the admin
        wss.clients.forEach((client) => {
          if (client.admin && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ text: 'New user connected. You can start chatting!', sender: 'system' }));
          }
        });

        ws.isFirstMessageReceived = true; // Mark that the first message is received
      } else {
        // Broadcast user messages to all connected clients (excluding the sender)
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ text: parsedMessage.text, sender: 'user' }));
          }
        });
      }
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(3002, () => {
  console.log('WebSocket server is running on 3002');
});
