import React from 'react'
import TopSection from './TopSection'
import TopMidSection from './TopMidSection'
import MidSection from './MidSection'
import BottomSection from './BottomSection'
import MidBottomSection from './MidBottomSection'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <Box mt={2}>
        <TopSection/>
      </Box>
      <Box mt={10}>
        <TopMidSection/>
      </Box>
      <Box mt={10}>
        <MidSection/>
      </Box>
      <Box mt={10}>
        <MidBottomSection/>
      </Box>
      <Box mt={10}>
        <BottomSection/>
      </Box>
    </Box>
  )
}

export default Home