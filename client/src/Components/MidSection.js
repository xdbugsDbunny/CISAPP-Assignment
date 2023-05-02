import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import pinkClock from '../Assests/pinkClock.png'
import gps from '../Assests/gps.png'
import heart from '../Assests/heart.png'

const MidSection = () => {
  return (
    <Box>
      <Typography variant='h4' style={{textAlign:'center',fontWeight:600}}>How it works?</Typography>
      <Grid container spacing={14} style={{marginTop:'25px'}}>
        <Grid item xs={1.5}></Grid>
          <Grid item xs={3}>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' borderRadius='8px' style={{background:'#e3cfbb'}} height='300px' >
              <img alt='img' src={pinkClock} height='70px' width='70px' style={{borderRadius:'51px'}}/><br/>
              <Typography textAlign='center' fontWeight={600}>Download the app and connect and verify the requestor for vehicle.</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' borderRadius='8px' style={{background:'#e3cfbb'}} height='300px' >
              <img alt='img' src={gps} height='70px' width='70px' style={{borderRadius:'51px'}}/><br/>
              <Typography textAlign='center' fontWeight={600}>Download the app and connect and verify the requestor for vehicle.</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' borderRadius='8px' style={{background:'#e3cfbb'}} height='300px' >
              <img alt='img' src={heart} height='70px' width='70px' style={{borderRadius:'51px'}}/><br/>
              <Typography textAlign='center' fontWeight={600}>Download the app and connect and verify the requestor for vehicle.</Typography>
            </Box>
          </Grid>
      </Grid>
    </Box>
  )
}

export default MidSection