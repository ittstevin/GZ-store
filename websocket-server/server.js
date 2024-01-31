const http = require('http');
const WebSocket = require('ws');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = 3001;

wss.on('connection', (ws) => {
  const userId = uuidv4();

  // Send an initial message to the user
  ws.send(JSON.stringify({
    type: 'message',
    sender: 'system',
    text: 'Wait a minute as we look for someone to help you',
  }));

  ws.on('message', (message) => {
    // Handle user messages here
    const parsedMessage = JSON.parse(message);

    // Check the message type
    if (parsedMessage.type === 'chat') {
      // Simulate a reply after a brief delay
      setTimeout(() => {
        ws.send(JSON.stringify({
          type: 'message',
          sender: 'support',
          text: 'Thank you for reaching out! How can we assist you?',
        }));
      }, 1000);
    }

    // You can add more logic to handle different types of messages
  });

  ws.on('close', () => {
    // Handle user disconnection events here
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
