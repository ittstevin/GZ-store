// WebSocket.js
const WebSocketClient = () => {
    const socket = new WebSocket('ws://localhost:3002'); // Update with your WebSocket server URL
  
    socket.addEventListener('open', () => {
      console.log('WebSocket connection established');
    });
  
    socket.addEventListener('message', (event) => {
      const receivedMessage = JSON.parse(event.data);
      console.log('Received message:', receivedMessage);
      // Handle the received message as needed
    });
  
    socket.addEventListener('close', () => {
      console.log('WebSocket connection closed');
    });
  
    return socket;
  };
  
  export default WebSocketClient;
  