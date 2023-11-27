import React from "react";
import { Box, Typography, IconButton, Avatar, Stack } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { ComponentProvider } from "@/Context/context";
import { useComponent } from "@/Context/context";

function ProfileSetting() {
  const { toggleComponent } = useComponent();

  return (
    <Box
      sx={{
        height: "100%",
        // display:'flex',
        // flexDirection:'column'
        // backgroundColor:'green'
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
          height: "100%",
          // overflow:'hidden'
        }}
      >
        <IconButton color="inherit">
          <ArrowBack onClick={() => toggleComponent("sidebar")} />
        </IconButton>
        <Typography fontSize={20}>Profile</Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "#F0F2F5",
          height: "100%",
          width: "100%",
          height: '766px'
          

          // flex:'1'
        }}
      >
        <Stack justifyContent="center" direction="row" padding={2}>
          <Avatar sx={{ width: "200px", height: "200px" }} />
        </Stack>
        <Box bgcolor="white" padding="15px 40px">
          <Typography color="#008069" fontSize="14px" mb={1}>
            Your Name
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="#606466" fontSize="16px">
              Your Good Name
            </Typography>
            <IconButton>
              <EditIcon color="#8696A0" />
            </IconButton>
          </Stack>
        </Box>
        <Box padding="35px 40px">
          <Typography color="#667781" fontSize="14px">
            This is not your username or pin .This name will be visible to your
            WhatsApp contacts.
          </Typography>
        </Box>
        <Box bgcolor="white" padding="15px 40px">
          <Typography color="#008069" fontSize="14px" mb={1}>
            About
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="#606466" fontSize="16px">
              Your bio / description
            </Typography>
            <IconButton>
              <EditIcon color="#8696A0" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileSetting;
