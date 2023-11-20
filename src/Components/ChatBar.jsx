import { MoreVertOutlined, Search, Videocam } from '@mui/icons-material';
import { Avatar, Box, Typography, InputBase } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicNoneIcon from "@mui/icons-material/MicNone";
import React from 'react'

function ChatBar() {
  return (
    <Box sx={{height:'100%', display:'flex',flexDirection:'column'}}>
        
        {/* chat navbar */}

        <Box sx={{backgroundColor:'#F0F2F5', display:'flex', justifyContent:'space-between', padding:'10px 30px'}}>
            <Box sx={{display:'flex', alignItems:'center', gap:'15px'}}>
                <Avatar>{'Al'}</Avatar>
                <Typography sx={{color:'#3C4148'}}>{'Name name'}</Typography>
            </Box>
            <Box sx={{display:'flex', alignItems:'center',gap:'15px', color:'#54656F'}}>
                <Videocam  sx={{cursor:'pointer', margin:'0px 2px'}}/>
                <Search sx={{cursor:'pointer', margin:'0px 2px'}}/>
                <MoreVertOutlined  sx={{cursor:'pointer', margin:'0px 0px'}}/>
            </Box>
        </Box>

        {/* chat  body */}
        <Box sx={{flex:'1', backgroundColor:'#F0F2F5'}}>
          <Box>

          </Box>
        </Box>

        {/* add chat section */}
        <Box sx={{ bgcolor:'#F0F2F5', padding:'0px 10px'}}>
          <Box sx={{display:'flex', alignItems:'center',gap:'1px'}}>
            <Box  sx={{display:'flex', alignItems:'center', height:'100%', gap:'10px', color:'#54656F'}}>
              <SentimentSatisfiedAltIcon sx={{cursor:'pointer', margin:'20px 3px'}}/>
              <AttachFileIcon sx={{cursor:'pointer', margin:'20px 3px'}}/>
            </Box>
            <Box sx={{flex:'1',display:'flex', alignItems:'center'}}>
              <InputBase
              sx={{ ml: 1, flex: 1 , width:'100%'}}
              placeholder="Type a message..."
              // inputProps={{ 'aria-label': 'search google maps' }}
            />
            </Box>
            <Box sx={{display:'flex', alignItems:'center', height:'100%',gap:'10px', color:'#54656F'}}>
              <MicNoneIcon sx={{cursor:'pointer', margin:'20px 3px'}}/>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default ChatBar;