import React, { useContext, useState } from "react";
import { Box, Typography, IconButton, Avatar, Stack, Divider } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useComponent } from "@/Context/context";
import SearchField from "./SearchField";
import { GetAllUsers } from "@/Context/GetAllUsers";
import { GetAddedUsers } from "@/Context/AddedUsers";




function Newchat() {
    const { toggleComponent } = useComponent();

      const { userCollection,fetchData   } = useContext(GetAllUsers);
      const { addNewUser } = useContext(GetAddedUsers);
      const handleEnter = (value) => {
        fetchData(value);
      };

      const handleAdd = (addUser) => {
        addNewUser(addUser);
        toggleComponent("sidebar")
      };

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
          height: "100%",
        }}
      >
        <IconButton color="inherit" onClick={() => toggleComponent("sidebar")}>
          <ArrowBack />
        </IconButton>
        <Typography fontSize={20}>New Chat</Typography>
      </Box>
      <Box
        sx={{
          overflowY: "scroll",
          overflowX: "hidden",
          bgcolor: "#FFFFFF",
          height: "100%",
          width: "100%",
          height: "766px",
        }}
      >
        <Box sx={{ padding: "7px 25px 10px 10px" }}>
          <SearchField onKeyPress={(value) => handleEnter(value)} />
        </Box>
        <Box>
          <Box
            sx={{
              padding: "15px 25px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap: "15px",
              ":hover": {
                backgroundColor: "#F5F6F6",
              },
            }}
          >
            <Box>
              <IconButton
                sx={{
                  backgroundColor: "#00A884",
                  ":hover": { backgroundColor: "#00A884" },
                }}
              >
                <PeopleIcon sx={{ fontSize: "2.1rem", color: "white" }} />
              </IconButton>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "17px" }}>New group</Typography>
            </Box>
          </Box>
          <Divider
            variant="outline"
            component="li"
            sx={{ listStyle: "none", marginLeft: "90px" }}
          />
          <Box
            sx={{
              padding: "15px 25px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap: "15px",
              ":hover": {
                backgroundColor: "#F5F6F6",
              },
            }}
          >
            <Box>
              <IconButton
                sx={{
                  backgroundColor: "#00A884",
                  ":hover": { backgroundColor: "#00A884" },
                }}
              >
                <ContactsIcon sx={{ fontSize: "2.1rem", color: "white" }} />
              </IconButton>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "17px" }}>New community</Typography>
            </Box>
          </Box>
          <Divider
            variant="outline"
            component="li"
            sx={{ listStyle: "none", marginLeft: "90px" }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              padding: "15px 25px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap: "15px",
              ":hover": {
                backgroundColor: "#F5F6F6",
              },
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "16px", color: "#008069", padding: "10px 0px" }}
              >
                SEARCH TO START A CHAT
              </Typography>
            </Box>
          </Box>
          <Divider
            variant="outline"
            component="li"
            sx={{ listStyle: "none", marginLeft: "90px" }}
          />
        </Box>
        <Box>
          {userCollection?.map((addUser, index) => (
            <React.Fragment key={index}>
              <Box
                key={index}
                onClick={() => handleAdd(addUser)}
                sx={{
                  padding: "15px 25px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: "15px",
                  ":hover": {
                    backgroundColor: "#F5F6F6",
                  },
                }}
              >
                <Box>
                  <Avatar
                    sx={{ fontSize: "2.3rem" }}
                    src={addUser.proImgLink}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: "17px", color: "#111B21" }}>
                    {addUser.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#667781",
                      maxWidth: "20vw",
                    }}
                    noWrap
                  >
                    {!addUser.bio
                      ? "Hey there I am using Whatsapp"
                      : addUser.bio}
                  </Typography>
                </Box>
              </Box>
              <Divider
                variant="outline"
                component="li"
                sx={{ listStyle: "none", marginLeft: "90px" }}
              />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Newchat