import React from 'react'
import Drawer from "@mui/material/Drawer";
import {Box, Divider, IconButton, Typography } from '@mui/material';
import { ArrowBack} from '@mui/icons-material';
import SearchField from './SearchField';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import FeedIcon from "@mui/icons-material/Feed";
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import { useComponent } from "@/Context/context";





function SettingSidebar() {
  // const { isDrawerOpen, closeDrawer } = useDrawer();



      const { toggleComponent } = useComponent();


  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "#008069",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "102px 0px 10px 10px",
          // overflow:'hidden'
        }}
      >
        <IconButton color="inherit">
          <ArrowBack onClick={() => toggleComponent("sidebar")} />
        </IconButton>
        <Typography fontSize={20}>Settings</Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          height: "100%",
          paddingBottom:'55px'
        }}
      >
        <Box
          sx={{
            padding: "10px ",
          }}
        >
          <SearchField />
        </Box>
        <Box>
          <Stack
            sx={{
              cursor: "pointer",
              "&:hover": { backgroundColor: "#F0F2F5" },
            }}
            direction="row"
            spacing={2}
            padding={"10px 20px"}
            onClick={() => toggleComponent("profile")}
          >
            <Avatar
              alt="Remy Sharp"
              // src="/static/images/avatar/1.jpg"
              sx={{ width: 75, height: 76 }}
            />
            <Stack direction="column" justifyContent="center">
              <Typography sx={{ fontSize: "17px", color: "#111B21" }}>
                Your Name
              </Typography>
              <Typography
                noWrap
                sx={{ color: "#667781", fontSize: "14px", maxWidth: "300px" }}
              >
                Your description / bio wad wa wa dawaw da w dwa awd
              </Typography>
            </Stack>
          </Stack>
          <Stack
            color="#3B4A54"
            spacing={0}
            // divider={<Divider orientation="horizental" flexItem  />}
          >
            {/* settings option rows  */}
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F0F2F5",
                },
              }}
            >
              <Stack direction="row" spacing={3} paddingLeft={3} paddingTop={2}>
                <NotificationsIcon />
                <Typography sx={{ fontSize: "16px", color: "#3B4A54" }}>
                  Notifications
                </Typography>
              </Stack>
              <Divider
                component="li"
                sx={{ listStyle: "none", margin: "15px 0px 0px 70px" }}
                // variant="inset"
              />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F0F2F5",
                },
              }}
            >
              <Stack direction="row" spacing={3} paddingLeft={3} paddingTop={2}>
                <LockIcon />
                <Typography sx={{ fontSize: "16px", color: "#3B4A54" }}>
                  Privacy
                </Typography>
              </Stack>
              <Divider
                component="li"
                sx={{ listStyle: "none", margin: "15px 0px 0px 70px" }}
                // variant="inset"
              />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F0F2F5",
                },
              }}
            >
              <Stack direction="row" spacing={3} paddingLeft={3} paddingTop={2}>
                <SecurityIcon />
                <Typography sx={{ fontSize: "16px", color: "#3B4A54" }}>
                  Security
                </Typography>
              </Stack>
              <Divider
                component="li"
                sx={{ listStyle: "none", margin: "15px 0px 0px 70px" }}
                // variant="inset"
              />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F0F2F5",
                },
              }}
            >
              <Stack direction="row" spacing={3} paddingLeft={3} paddingTop={2}>
                <Brightness4Icon />
                <Typography sx={{ fontSize: "16px", color: "#3B4A54" }}>
                  Theme
                </Typography>
              </Stack>
              <Divider
                component="li"
                sx={{ listStyle: "none", margin: "15px 0px 0px 70px" }}
                // variant="inset"
              />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F0F2F5",
                },
              }}
            >
              <Stack direction="row" spacing={3} paddingLeft={3} paddingTop={2}>
                <WallpaperIcon />
                <Typography sx={{ fontSize: "16px", color: "#3B4A54" }}>
                  Chat wallpaper
                </Typography>
              </Stack>
              <Divider
                component="li"
                sx={{ listStyle: "none", margin: "15px 0px 0px 70px" }}
                // variant="inset"
              />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F0F2F5",
                },
              }}
            >
              <Stack direction="row" spacing={3} paddingLeft={3} paddingTop={2}>
                <ArrowCircleDownIcon />
                <Typography sx={{ fontSize: "16px", color: "#3B4A54" }}>
                  Media auto-download
                </Typography>
              </Stack>
              <Divider
                component="li"
                sx={{ listStyle: "none", margin: "15px 0px 0px 70px" }}
                // variant="inset"
              />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F0F2F5",
                },
              }}
            >
              <Stack direction="row" spacing={3} paddingLeft={3} paddingTop={2}>
                <FeedIcon />
                <Typography sx={{ fontSize: "16px", color: "#3B4A54" }}>
                  Request account info
                </Typography>
              </Stack>
              <Divider
                component="li"
                sx={{ listStyle: "none", margin: "15px 0px 0px 70px" }}
                // variant="inset"
              />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F0F2F5",
                },
              }}
            >
              <Stack direction="row" spacing={3} paddingLeft={3} paddingTop={2}>
                <MotionPhotosAutoIcon />
                <Typography sx={{ fontSize: "16px", color: "#3B4A54" }}>
                  Keyboard Shortcuts
                </Typography>
              </Stack>
              <Divider
                component="li"
                sx={{ listStyle: "none", margin: "15px 0px 0px 70px" }}
                // variant="inset"
              />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F0F2F5",
                },
              }}
            >
              <Stack direction="row" spacing={3} paddingLeft={3} paddingTop={2}>
                <HelpIcon />
                <Typography sx={{ fontSize: "16px", color: "#3B4A54" }}>
                  Help
                </Typography>
              </Stack>
              <Divider
                component="li"
                sx={{ listStyle: "none", margin: "15px 0px 0px 70px" }}
                // variant="inset"
              />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F0F2F5",
                },
              }}
            >
              <Stack direction="row" spacing={3} paddingLeft={3} paddingTop={2}>
                <LogoutIcon />
                <Typography sx={{ fontSize: "16px", color: "#3B4A54" }}>
                  Log out
                </Typography>
              </Stack>
              <Divider
                component="li"
                sx={{ listStyle: "none", margin: "15px 0px 0px 70px" }}
                // variant="inset"
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingSidebar