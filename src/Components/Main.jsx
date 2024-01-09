import { Box, Grid } from '@mui/material'
import Mainbar from "./Mainbar";
import Sidebar from './Sidebar';
import React, { useState, useEffect } from "react";
import ChatBar from './ChatBar';
import Signup from './SignupForm';
import SettingSidebar from './SettingSidebar';
import ProfileSetting from './ProfileSetting';
import { useComponent } from '@/Context/context';
import Newchat from './Newchat';


function Main() {
    const { currentComponent, showChatBar } = useComponent();
    const [slideDirection, setSlideDirection] = useState("");

   useEffect(() => {
     setSlideDirection("slide-in");
     return () => setSlideDirection(""); // Reset slide direction on component change
   }, [currentComponent]);



    // const [showChatBar, setShowChatBar] = useState(false);


    //  const toggleChatBar = () => {
    //    setShowChatBar(!showChatBar);
    //  };
  return (
    <Box className="main-bg" sx={{ padding: "20px 5vw", height: "100vh" }}>
      <Box sx={{ height: "100%" }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={4} overflow="hidden">
            <div className={`main ${slideDirection}`}>
              {currentComponent === "sidebar" && (
                <Sidebar/>
              )}
              {currentComponent === "profile" && <ProfileSetting />}
              {currentComponent === "settings" && <SettingSidebar />}
              {currentComponent === "newchat" && <Newchat />}
            </div>
          </Grid>
          <Grid item xs={8}>
            {showChatBar ? (
              <ChatBar  />
            ) : (
              <Mainbar />
            )}
            {/* <ChatBar /> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Main