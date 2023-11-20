import {
    Avatar,
    Box,
    Paper,
    FormControl,
    List,
    Input,
    InputAdornment,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
    IconButton,
    colors,
} from "@mui/material";
import { FocusEventHandler } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import React, {useState} from 'react'
import { ArrowBackSharp, BackHandSharp } from "@mui/icons-material";

        const Search = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "100%",
            backgroundColor:'#F0F2F5',
            borderRadius:'6px'
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
                fontSize:'14px',
                color:'#667781', 
                width: "100%",
            },
        }));






function Sidebar() {
    const [isFocus, setFocus] = useState(false)

  return (
    <Box sx={{width:'100%'}}>
        <Paper>
            {/* navbar of sidebar */}
            <Box sx={{bgcolor:'#F0F2F5', display:'flex', justifyContent:'space-between', alignItems:'center',padding:'10px 25px'}}>
                <Avatar>AZ</Avatar>
                <Box sx={{display:'flex', alignItems:'center', gap:'25px', height:'100%', }}>
                    <IconButton>
                    <GroupsIcon sx={{color:'#54656F', padding:'0px 0px' ,cursor:'pointer'}}/>
                    </IconButton>
                    <IconButton>
                        <DonutLargeIcon sx={{color:'#54656F', padding:'1px 0px' ,cursor:'pointer'}}/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon sx={{color:'#54656F', padding:'0px 0px' ,cursor:'pointer'}}/>
                    </IconButton>
                    <IconButton>
                        <AddCommentIcon sx={{color:'#54656F', padding:'0px 0px' ,cursor:'pointer'}}/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon sx={{color:'#54656F', padding:'0px 0px' ,cursor:'pointer'}}/>
                    </IconButton>
                </Box>
            </Box>
        </Paper>

        {/* searchbar of sidebar */}

        <Box sx={{bgcolor:'#ffff', display:'flex', alignItems:'center', padding:'8.5px 10px'}}>
            <Search >
                <SearchIconWrapper>
                {isFocus ? <ArrowBackSharp sx={{color:'#00A884'}}/> :<SearchIcon sx={{color:'#54656F'}} /> }
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search or Start a new Chat"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <IconButton>
                <FilterListIcon sx={{cursor:'pointer', color:'#8696A0'}}/>
            </IconButton>
        </Box>

       {/* side chatHeads  */}

        <Box sx={{width: '100%', height:'100%' , overflow:'hidden'}}>
            <List sx={{ width: '100%', bgcolor: 'background.paper', border:'1px 0px solid #F5F6F6',  height: 'calc(100vh - 156px)' , overflowY:'scroll' }}>
                <Divider variant="outline" component="li" />
                <ListItem alignItems="flex-start" sx={{width: '100%', padding:'10px'}}>
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        {'  Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                
                <ListItem alignItems="flex-start" sx={{width: '100%', padding:'10px'}}>
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        {'  Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                    
                <Divider variant="inset" component="li" />

                <ListItem alignItems="flex-start" sx={{width: '100%', padding:'10px'}}>
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        {'  Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                    
                <Divider variant="inset" component="li" />

                <ListItem alignItems="flex-start" sx={{width: '100%', padding:'10px'}}>
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        {'  Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                    
                <Divider variant="inset" component="li" />

                <ListItem alignItems="flex-start" sx={{width: '100%', padding:'10px'}}>
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        {'  Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                    
                <Divider variant="inset" component="li" />

                <ListItem alignItems="flex-start" sx={{width: '100%', padding:'10px'}}>
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        {'  Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                    
                <Divider variant="inset" component="li" />


                <ListItem alignItems="flex-start" sx={{width: '100%', padding:'10px'}}>
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        {'  Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                    
                <Divider variant="inset" component="li" />

                <ListItem alignItems="flex-start" sx={{width: '100%', padding:'10px'}}>
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        {'  Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                    
                <Divider variant="inset" component="li" />

                <ListItem alignItems="flex-start" sx={{width: '100%', padding:'10px'}}>
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        {'  Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                    
                <Divider variant="inset" component="li" />

                <ListItem alignItems="flex-start" sx={{width: '100%', padding:'10px'}}>
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        {'  Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                    
                <Divider variant="inset" component="li" />

                <ListItem alignItems="flex-start" sx={{width: '100%', padding:'10px'}}>
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        {'  Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                    
                <Divider variant="inset" component="li" />
            </List>
        </Box>
    </Box>
  )
}

export default Sidebar