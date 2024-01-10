import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Paper,
  List,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { ArrowBackSharp, BackHandSharp } from "@mui/icons-material";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { useComponent } from "@/Context/context";
import { auth } from "@/Firebase/FirebaseConfig";
import { RegUserInfo } from "@/Context/RegUserInfo";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import { GetAddedUsers } from "@/Context/AddedUsers";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";




const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "100%",
    backgroundColor: "#F0F2F5",
    borderRadius: "6px",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    fontSize: "14px",
    color: "#667781",
    width: "100%",
  },
}));


function Sidebar() {
  const router = useRouter();
  
    const { addedUsers, setCurrentChatUser } =
    useContext(GetAddedUsers);
    const { user } = useContext(RegUserInfo);
    const [open, setOpen] = useState(false);

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  const activeUser = (chatUser) => {
    setCurrentChatUser(chatUser)
    setShowChatBar(true)
  }
  // contextprovider
  const { toggleComponent, showChatBar, setShowChatBar } = useComponent();

  const [isFocus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };
  // const handleLogout = () => {
  //   auth.signOut().then(() => {
  //     router.push("/");
  //     console.log("logged out");
  //   });
  // };



      const handleClose = () => {
        setOpen(false);
        auth.signOut().then(() => {
          router.push("/");
          console.log("logged out");
        });
      }; 



  return (
    <Box className="sidebar" sx={{ width: "100%" }}>
      <Paper>
        {/* navbar of sidebar */}
        <Box
          sx={{
            bgcolor: "#F0F2F5",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 25px",
            cursor: "pointer",
          }}
        >
          {!user?.proImgLink ? (
            <CircularProgress size={24} />
          ) : (
            <Avatar
              onClick={() => toggleComponent("profile")}
              src={user?.proImgLink}
            ></Avatar>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
              height: "100%",
            }}
          >
            <Tooltip title="Communities">
              <IconButton>
                <GroupsIcon
                  sx={{
                    color: "#54656F",
                    padding: "0px 0px",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Status">
              <IconButton>
                <DonutLargeIcon
                  sx={{
                    color: "#54656F",
                    padding: "1px 0px",
                    cursor: "pointer",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Channels">
              <IconButton>
                <ChatIcon
                  sx={{
                    color: "#54656F",
                    padding: "0px 0px",
                    cursor: "pointer",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="New chat"
              onClick={() => toggleComponent("newchat")}
            >
              <IconButton>
                <AddCommentIcon
                  sx={{
                    color: "#54656F",
                    padding: "0px 0px",
                    cursor: "pointer",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Dropdown>
              <MenuButton>
                <Tooltip title="Menu">
                  <MoreVertIcon
                    sx={{
                      color: "#54656F",
                      padding: "0px 0px",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              </MenuButton>
              <Menu slots={{ listbox: Listbox }}>
                <MenuItem onClick={createHandleMenuClick("Profile")}>
                  New group
                </MenuItem>
                <MenuItem onClick={createHandleMenuClick("Language settings")}>
                  New Community
                </MenuItem>
                <MenuItem onClick={createHandleMenuClick("Log out")}>
                  Starred messages
                </MenuItem>
                <MenuItem onClick={createHandleMenuClick("Log out")}>
                  Select Chats
                </MenuItem>
                <MenuItem onClick={() => toggleComponent("settings")}>
                  Settings
                </MenuItem>
                <MenuItem onClick={() => setOpen(true)}>Log out</MenuItem>
                <Divider
                  variant="inset"
                  component="li"
                  sx={{ listStyle: "none", margin: "0px" }}
                />
                <MenuItem onClick={createHandleMenuClick("Log out")}>
                  Get Whatsapp for Windows
                </MenuItem>
              </Menu>
            </Dropdown>
          </Box>
        </Box>
      </Paper>

      {/* searchbar of sidebar */}

      <Box
        sx={{
          bgcolor: "#ffff",
          display: "flex",
          alignItems: "center",
          padding: "8.5px 10px",
        }}
      >
        <Search>
          <SearchIconWrapper>
            {isFocus ? (
              <ArrowBackSharp sx={{ color: "#00A884" }} />
            ) : (
              <SearchIcon sx={{ color: "#54656F" }} />
            )}
          </SearchIconWrapper>
          <StyledInputBase
            sx={{
              color: "#667781",
              width: "100%",
              "&::placeholder": { color: "#667781" },
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search or Start a new Chat"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <IconButton>
          <FilterListIcon sx={{ cursor: "pointer", color: "#8696A0" }} />
        </IconButton>
      </Box>

      {/* side chatHeads  */}

      <Box sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            border: "1px 0px solid #F5F6F6",
            height: "calc(100vh - 156px)",
            overflowY: "scroll",
          }}
        >
          <Divider variant="outline" component="li" />
          {addedUsers.map((chatUser, index) => (
            <React.Fragment key={index}>
              <ListItem
                onClick={() => activeUser(chatUser)}
                className="list-item"
                alignItems="flex-start"
                sx={{
                  width: "100%",
                  padding: "10px 20px",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#F0F2F5" },
                  "&:hover .css-smgy46-MuiSvgIcon-root": {
                    opacity: "1px",
                    translate: "translateX(1px)",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={chatUser.proImgLink} />
                </ListItemAvatar>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: "100%",
                    textOverflow: "ellipsis",
                  }}
                >
                  <ListItemText
                    sx={{
                      maxHeight: "50px",
                      minHeight: "50px",
                      paddingTop: "5px",
                      width: "95%",
                      height: "100%",
                      overflow: "hidden",
                      //   textOverflow:'ellipsis'
                    }}
                    primary={chatUser.name}
                    secondary={
                      <React.Fragment>
                        {!chatUser.bio
                          ? "Hey there I am using Whatsapp"
                          : chatUser.bio}
                      </React.Fragment>
                    }
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      right: "10px",
                      top: "15px",
                      fontSize: "12px",
                      color: "#667781",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      gap: "3px",
                    }}
                  >
                    12 pm
                    <KeyboardArrowDownIcon
                      fontSize="medium"
                      className="icon-down"
                      sx={{ opacity: "0", transform: "translateX(15px)" }}
                    />
                  </Typography>
                </Box>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>

        {/* logout dialog foe logout */}

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Log out ?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to logout ?
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ width: "28vw", margin:"7px 4px" }}>
            <Button
              onClick={() => setOpen(false)}
              sx={{ borderRadius: "30px", color: "#017561" }}
              autoFocus
            >
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              sx={{ bgcolor: "#017561", borderRadius: "30px" }}
              variant="contained"
            >
              Log out
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}














const Listbox = styled("ul")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    padding: 6px 0px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 0px;
    overflow: auto;
    outline: 0px;
    background: #fff;
    border: 1px solid #DAE2ED;
    color:  #585d60;
    box-shadow: 0px 4px 6px rgba(0,0,0, 0.30);
    z-index: 1;
    `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
    list-style: none;
    padding: 10px 20px;
    border-radius: 0px;
    cursor: pointer;
    user-select: none;

    &:last-of-type {
        border-bottom: none;
    }

    &.${menuItemClasses.focusVisible} {
        outline: 3px solid #999999;
        background-color: #E5EAF2;
        color: #1C2025;
    }
    &:hover:not(.${menuItemClasses.disabled}) {
        background-color: #F0F0F0;
        color: #000000;
    }
    `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
    border-radius: 0px;
    color: transparent;
    transition: all 150ms ease;
    cursor: pointer;
    border: 0px solid #DAE2ED;
    `
);

export default Sidebar;
