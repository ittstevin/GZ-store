import React, { useState, useEffect } from "react";
import Chat from "./components/Chat";
import ChatReply from "./components/ChatReply";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    // Your WebSocket connection logic goes here
    const ws = new WebSocket("ws://localhost:3001");

    ws.onopen = () => {
      console.log("WebSocket connection established");
      setChatOpen(true);
    };

    ws.onmessage = (event) => {
      const parsedMessage = JSON.parse(event.data);
      setMessages([...messages, parsedMessage]);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
      setChatOpen(false);
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, [messages]);

  const handleSendMessage = (userMessage) => {
    const newMessage = { text: userMessage, sender: "user" };
    setMessages([...messages, newMessage]);

    // Send the message to the WebSocket server
    // Adjust this based on your server setup
    // This is a simplified example assuming the WebSocket is open
    ws.send(JSON.stringify(newMessage));
  };

  return (
    <div>
      <h1>WebSocket Chat Example</h1>
      {isChatOpen && <Chat messages={messages} />}
      <ChatReply onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
