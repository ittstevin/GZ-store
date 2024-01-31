import { Box, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
// ... (import statements)

const Chat = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [socket, setSocket] = useState(null);
  
    useEffect(() => {
      const newSocket = new WebSocket('ws://localhost:3001'); // Update with your server URL
  
      newSocket.addEventListener('message', (event) => {
        const receivedMessage = JSON.parse(event.data);
        setMessages([...messages, receivedMessage]);
      });
  
      setSocket(newSocket);
  
      return () => {
        newSocket.close();
      };
    }, [messages]);
  
    const handleSendMessage = () => {
      if (newMessage.trim() !== "") {
        socket.send(JSON.stringify({ text: newMessage, sender: "user" }));
        setMessages([...messages, { text: newMessage, sender: "user" }]);
        setNewMessage("");
      }
    };
  
    return (
      <Box
        padding="20px"
        border="1px solid #ccc"
        borderRadius="5px"
        width="300px"
        backgroundColor="#fff"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      >
        <Typography variant="h6" mb="10px" textAlign="center">
          Chat with Me
        </Typography>
        <Box
          maxHeight="200px"
          overflowY="auto"
          marginBottom="10px"
          paddingX="10px"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                textAlign: message.sender === "user" ? "right" : "left",
                marginBottom: "5px",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  backgroundColor: message.sender === "user" ? "#2196f3" : "#e0e0e0",
                  color: message.sender === "user" ? "#fff" : "#000",
                  padding: "10px",
                  borderRadius: "10px",
                  display: "inline-block",
                  maxWidth: "80%",
                  wordWrap: "break-word",
                }}
              >
                {message.text}
              </Typography>
            </div>
          ))}
        </Box>
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          mb="10px"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          fullWidth
        >
          Send
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={onClose}
          fullWidth
          style={{ marginTop: "10px" }}
        >
          Close Chat
        </Button>
      </Box>
    );
  };
  
  export default Chat;
  