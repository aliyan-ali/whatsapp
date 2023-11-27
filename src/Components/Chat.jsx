import { Box } from '@mui/material'
import React from 'react'
import MessageBubble from './MessageBubble'

function Chat() {
  return (
    <Box>
      <MessageBubble message="Hello!" fromMe={false} />
      <MessageBubble message="Hey there!" fromMe={true} />
    </Box>
  );
}

export default Chat