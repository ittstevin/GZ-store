import { Box, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState, useRef } from "react";

// ... (imports)

const Chat = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:3002'); // Update with your server URL

    newSocket.addEventListener('open', () => {
      console.log('WebSocket connection established.');
    });

    newSocket.addEventListener('message', (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
      console.log('WebSocket connection closed.');
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const chatMessage = { type: 'chat', text: newMessage, sender: 'user' };
      socket.send(JSON.stringify(chatMessage));
      setMessages([...messages, chatMessage]);
      setNewMessage("");
    }
  };

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      padding="20px"
      border="1px solid #ccc"
      borderRadius="5px"
      width="300px"
      backgroundColor="#fff"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h6" mb="10px" textAlign="center">
        Chat with Me
      </Typography>
      <Box
        flex="1"
        overflowY="auto"
        marginBottom="10px"
        paddingX="10px"
        ref={chatBoxRef}
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
