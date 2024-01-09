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
import React, { useContext, useState, useEffect } from 'react'
import MessageBubble from './MessageBubble';
// import Chat from './Chat';
import { GetAddedUsers } from '@/Context/AddedUsers';
import { addDoc, collection, db, onSnapshot , query, where, doc, deleteDoc} from "../Firebase/FirebaseConfig";
import { RegUserInfo } from '@/Context/RegUserInfo';
import { useComponent } from '@/Context/context';



const Message = ({ message, userId, onDelete }) => {
  const isSentByMe = message.senderId === userId;

  const messageStyle = {
    borderRadius: isSentByMe ? "16px 0px 16px 16px" : "0px 16px 16px 16px",
    padding: isSentByMe ? "16px 22px 16px 10px" : "16px 10px 16px 18px",
    marginBottom: "20px",
    backgroundColor: isSentByMe ? "#d9fdd3" : "#f5f7fa",
    maxWidth: "300px",
    display: "flex",
    width: "fit-content",
    alignSelf: isSentByMe ? "flex-end" : "flex-start",
    cursor: "pointer",

    "&:hover": { backgroundColor: "#F0F2F5" },
    "&:hover .MuiSvgIcon-fontSizeMedium": {
      opacity: "1",
      // translate: "translateX(1px)",
    },
  };

  return (
    <Box sx={messageStyle}>
      <Typography variant="h3" sx={{ fontSize: "14px", display: "flex" }}>
        {isSentByMe ? (
          <>
            <Dropdown>
              <MenuButton sx={{ backgroundColor: "#F0F2F5" }}>
                <KeyboardArrowDownIcon
                  fontSize="medium"
                  className="icon-down"
                  sx={{
                    opacity: "0",
                    fontSize: "16px",
                    color: "#667781",
                    marginRight: "20px",
                    alignSelf: "flex-end",
                    backgroundColor: "#F0F2F5",
                    // alignSelf:"flex-end"
                    // transform: "translateX(15px)",
                  }}
                />
              </MenuButton>
              <Menu
                slots={{ listbox: Listbox }}
                style={{ translate: "-25px 10px" }}
              >
                <MenuItem>Edit</MenuItem>
                <MenuItem onClick={() => onDelete(message.msgDocId)}>
                  Delete
                </MenuItem>
              </Menu>
            </Dropdown>
            {message.messageText}
          </>
        ) : (
          <>
            {message.messageText}
            <Dropdown>
              <MenuButton sx={{ backgroundColor: "#F0F2F5" }}>
                <KeyboardArrowDownIcon
                  fontSize="medium"
                  className="icon-down"
                  sx={{
                    opacity: "0",
                    fontSize: "16px",
                    color: "#667781",
                    marginLeft: "20px",
                    alignSelf: "flex-end",
                    backgroundColor: "inherit",
                    // transform: "translateX(15px)",
                  }}
                />
              </MenuButton>
              <Menu
                slots={{ listbox: Listbox }}
                style={{ translate: "35px 10px" }}
              >
                <MenuItem>Edit</MenuItem>
                <MenuItem disabled>Delete</MenuItem>
              </Menu>
            </Dropdown>
          </>
        )}
      </Typography>
    </Box>
  );
};

function ChatBar() {
  const [message, setMessage] = useState("");
    const { setShowChatBar } = useComponent();
  const { user } = useContext(RegUserInfo);
  const { currentChatUser, removeAddedUser } = useContext(GetAddedUsers);
  const [chatMessages, setChatMessages] = useState([]);
  
    const handleDelete = async (deltedMsgId) => {
      try {
        const deleteMsgRef = doc(db, "chats", deltedMsgId);
        deleteDoc(deleteMsgRef);
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    };


  const getChatmessages = async () => {
    try {
      onSnapshot(
        query(
          collection(db, "chats"),
          where("senderId", "in", [user.userId, currentChatUser.id]),
          where("receiverId", "in", [user.userId, currentChatUser.id])
        ),
        (querySnapshot) => {
          const allMessages = [];
          setChatMessages([]);
          querySnapshot.forEach((doc) => {
            const messageData = doc.data();
            const msgDocId = doc.id;
            const dateObject = new Date(messageData.date);
            allMessages.push({ ...messageData, dateObject, msgDocId });
          });
          allMessages.sort((a, b) => a.date - b.date);
          setChatMessages(allMessages);
        }
      );
    } catch (error) {
      console.error("Error fetching chat messages:", error);
      return [];
    }
  };

  const sendMessage = async (e) => {
    if (e.key !== "Enter" || !currentChatUser.id || !user.userId) return;

    const chat = {
      senderId: user.userId,
      receiverId: currentChatUser.id,
      messageText: message,
      date: Date.now(),
    };

    try {
      const collectionRef = collection(db, "chats");
      await addDoc(collectionRef, chat);
      setChatMessages((prevMessages) => [...prevMessages, chat]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };
  useEffect(() => {
    getChatmessages();
  }, [currentChatUser.id]);


  const handleRemoveAdded = (addedUserid)=>{ 
    removeAddedUser(addedUserid);
    setShowChatBar(false);
  }

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
          <Avatar src={currentChatUser.proImgLink} />
          <Typography sx={{ color: "#3C4148" }}>
            {currentChatUser.name}
          </Typography>
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
            <MenuButton >
              <Tooltip title="Menu">
                {/* <IconButton> */}
                <MoreVertIcon
                  sx={{
                    backgroundColor:"inherit",
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
              <MenuItem onClick={() => setShowChatBar(false)}>
                Close chat
              </MenuItem>

              <MenuItem onClick={createHandleMenuClick("Log out")}>
                Mute notifications
              </MenuItem>
              <MenuItem onClick={createHandleMenuClick("Log out")}>
                Disappearing messages
              </MenuItem>
              <MenuItem>clear chat</MenuItem>
              <MenuItem onClick={()=> handleRemoveAdded(currentChatUser.id)}>
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
          width: "100%",
          flexGrow: "1",
          backgroundColor: "#F1ECE5",
          padding: "20px",
          height: "600px",
          overflowX: "hidden",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* <Box sx={{overflow:'hidden',height:'100%', bgcolor:'red'}}> */}
        {chatMessages.map((message, index) => (
          <Message key={index} message={message} userId={user.userId} onDelete={handleDelete} />
        ))}

        {/* </Box> */}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={sendMessage}
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