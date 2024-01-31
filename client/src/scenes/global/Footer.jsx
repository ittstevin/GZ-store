import { useTheme } from "@emotion/react";
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { shades } from "../../theme";
import Chat from "./Chat"; // Import the Chat component

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();

  // State for chat messages
  const [chatMessages, setChatMessages] = useState([]);
  const [isChatOpen, setChatOpen] = useState(false);

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/place/K-UNITY+SACCO+LIMITED/@-1.1716512,36.8286882,19.75z/data=!4m6!3m5!1s0x182f3c5e3c19e2cf:0x983a043433b9c75!8m2!3d-1.1716421!4d36.828766!16s%2Fg%2F1q62jynzz?entry=ttu');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:tevingichoya@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+254762005479';
  };

  const handleChatButtonClick = () => {
    // Open the chat and add a welcome message
    setChatMessages([{ text: 'Wait a minute as we look for someone to help you', sender: 'system' }]);
    setChatOpen(true); // Set isChatOpen to true
    // ... Additional logic if needed
  };
  

  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            GZ STORE
          </Typography>
          <div>
            Discover the latest in cutting-edge technology at GZ STORE. Elevate your digital experience with our curated selection of innovative gadgets, top-tier electronics, and must-have tech accessories. From state-of-the-art smartphones to powerful laptops, we're your go-to destination for staying connected and ahead in the digital world. Explore, shop, and embrace the future with GZ STORE.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px" onClick={handleLocationClick} style={{ cursor: 'pointer', color: shades.primary[1000] }}>
            Suite F14, Mapa House Biashara street, Kiambu
          </Typography>
          <Typography mb="30px" onClick={handleEmailClick} style={{ cursor: 'pointer', color: shades.primary[1000] }}>
            tevingichoya@gmail.com
          </Typography>
          <Typography mb="30px" onClick={handlePhoneClick} style={{ cursor: 'pointer', color: shades.primary[1000] }}>
            +254 762 005 479
          </Typography>
          
          {/* Chat Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleChatButtonClick}
            sx={{ marginTop: '20px' }}
          >
            CHAT WITH ME
          </Button>

          {/* Chat Box */}
          {isChatOpen && (
            <div
              style={{
                position: 'fixed',
                bottom: '10px',
                right: '10px',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Chat messages={chatMessages} onClose={() => setChatOpen(false)} />
            </div>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
