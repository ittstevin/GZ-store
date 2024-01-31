import React from "react";
import { Box, Typography } from "@mui/material";

const Chat = ({ messages }) => {
  return (
    <Box
      style={{
        maxHeight: "200px",
        overflowY: "auto",
        marginBottom: "10px",
      }}
    >
      {messages.map((message, index) => (
        <div key={index} style={{ textAlign: message.sender === "user" ? "right" : "left" }}>
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
  );
};

export default Chat;
