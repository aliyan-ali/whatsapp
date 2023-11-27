import { Brightness1, Search, Videocam } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Typography,
  InputBase,
  IconButton,
  Divider,
  Tooltip,
} from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicNoneIcon from "@mui/icons-material/MicNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled, alpha } from "@mui/material/styles";
import React from 'react'
import MessageBubble from './MessageBubble';
import Chat from './Chat';


function ChatBar() {





  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* chat navbar */}
      <Box
        sx={{
          backgroundColor: "#F0F2F5",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 30px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Avatar>{"Al"}</Avatar>
          <Typography sx={{ color: "#3C4148" }}>{"Name name"}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            color: "#54656F",
          }}
        >
          <Tooltip title="Call">
            <IconButton sx={{ borderRadius: "5px" }}>
              <Videocam sx={{ cursor: "pointer", margin: "0px 2px" }} />
              <KeyboardArrowDownIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Search...">
            <IconButton>
              <Search sx={{ cursor: "pointer", margin: "0px 2px" }} />
            </IconButton>
          </Tooltip>
          <Dropdown>
            <MenuButton>
              <Tooltip title="Menu">
                {/* <IconButton> */}
                <MoreVertIcon
                  sx={{
                    color: "#54656F",
                    padding: "0px 0px",
                    cursor: "pointer",
                  }}
                />
                {/* </IconButton> */}
              </Tooltip>
            </MenuButton>
            <Menu slots={{ listbox: Listbox }}>
              <MenuItem onClick={createHandleMenuClick("Profile")}>
                Contact info
              </MenuItem>
              <MenuItem onClick={createHandleMenuClick("Language settings")}>
                Select messages
              </MenuItem>
              <MenuItem onClick={createHandleMenuClick("Log out")}>
                Close chat
              </MenuItem>
              <MenuItem onClick={createHandleMenuClick("Log out")}>
                Mute notifications
              </MenuItem>
              <MenuItem onClick={createHandleMenuClick("Log out")}>
                Disappearing messages
              </MenuItem>
              <MenuItem onClick={createHandleMenuClick("Log out")}>
                clear chat
              </MenuItem>
              <MenuItem onClick={createHandleMenuClick("Log out")}>
                Delete chat
              </MenuItem>
              <MenuItem onClick={createHandleMenuClick("Log out")}>
                Report
              </MenuItem>
              <MenuItem onClick={createHandleMenuClick("Log out")}>
                Block
              </MenuItem>
            </Menu>
          </Dropdown>
        </Box>
      </Box>
      {/* chat  body */}
      <Box
        sx={{
          flex: "1",
          backgroundColor: "#F1ECE5",
          backgroundImage: "URL(/Assets/bg.png)",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box>
          <Box sx={{
            padding:'10px 50px'
          }}>

            {/* chats */}
            <Chat/>
          </Box>
        </Box>
      </Box>
      {/* add chat section */}
      <Box sx={{ bgcolor: "#F0F2F5", padding: "0px 10px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              gap: "10px",
              color: "#54656F",
            }}
          >
            <SentimentSatisfiedAltIcon
              sx={{ cursor: "pointer", margin: "20px 3px" }}
            />
            <AttachFileIcon sx={{ cursor: "pointer", margin: "20px 3px" }} />
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: "7px",
              height: "100%",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, width: "100%" }}
              placeholder="Type a message..."
              // inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              gap: "10px",
              color: "#54656F",
            }}
          >
            <MicNoneIcon sx={{ cursor: "pointer", margin: "20px 3px" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}



const blue = {
  50: "#F0F0F0",
  100: "#C2C2C2",
  200: "#999999",
  300: "#666666",
  400: "#333333",
  500: "#000000",
  600: "#000000",
  700: "#000000",
  800: "#000000",
  900: "#000000",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Listbox = styled("ul")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    padding: 6px 0px;
    margin: 0px 30px 0px 0px;
    min-width: 200px;
    border-radius: 0px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color:  #585d60;
    box-shadow: 0px 4px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0,0.60)" : "rgba(0,0,0, 0.30)"
    };
    z-index: 1;
    `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
    list-style: none;
    padding: 13px 45px 13px 20px;
    border-radius: 0px;
    cursor: pointer;
    user-select: none;

    &:last-of-type {
        border-bottom: none;
    }

    &.${menuItemClasses.focusVisible} {
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[600] : blue[200]
        };
        background-color: ${
          theme.palette.mode === "dark" ? grey[800] : grey[100]
        };
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }

    &.${menuItemClasses.disabled} {
        color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }

    &:hover:not(.${menuItemClasses.disabled}) {
        background-color: ${
          theme.palette.mode === "dark" ? blue[900] : blue[50]
        };
      }
    `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
    border-radius: 0px;
    color: transparent;
    transition: all 150ms ease;
    cursor: pointer;
    border: 0px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    `
);

export default ChatBar;