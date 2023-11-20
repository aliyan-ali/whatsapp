import { Box, Grid } from '@mui/material'
import Mainbar from "./Mainbar";
import Sidebar from './Sidebar';
import React from 'react'
import ChatBar from './ChatBar';

function Main() {
  return (
    <Box className='main-bg' sx={{padding:'20px 15px', height:'100vh'}}>
        <Box sx={{height:'100%'}}>
            <Grid container sx={{height:'100%'}}>
                <Grid item xs={4} >
                    <Sidebar />
                </Grid>
                <Grid item xs={8}>
                    {/* <Mainbar /> */}
                    <ChatBar/>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default Main