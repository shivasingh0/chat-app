import React from 'react'
import { ChatState } from '../context/ChatProvider'
import SideDrawer from '../components/SideDrawer'
import MyChat from '../components/MyChat'
import ChatBox from '../components/ChatBox'
import { Box } from '@chakra-ui/react'

const Chat = () => {
  const { user } = ChatState()
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="center"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChat />}
        {user && <ChatBox />}
      </Box>
    </div>
  )
}

export default Chat