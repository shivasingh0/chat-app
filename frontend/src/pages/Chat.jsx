import React, { useState } from 'react'
import { ChatState } from '../context/ChatProvider'
import SideDrawer from '../components/SideDrawer'
import MyChat from '../components/MyChat'
import ChatBox from '../components/ChatBox'
import { Box } from '@chakra-ui/react'

const Chat = () => {
  const { user } = ChatState()
  const [fetchAgain, setFetchAgain] = useState(false)
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
        {user && <MyChat fetchAgain={fetchAgain} />}
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </Box>
    </div>
  )
}

export default Chat