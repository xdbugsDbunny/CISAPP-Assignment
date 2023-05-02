import styled from '@emotion/styled'
import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import clock from '../Assests/clock.png'
import bike from '../Assests/bike.png'
import wallet from '../Assests/wallet.png'
import fuel from '../Assests/fuel.png'
const Item = styled(Paper)({
  backgroundColor: '#fff',
  textAlign: 'center',
})
const MainWrapper = styled(Box)`
  // background:yellow;
  height:700px;
  width:100%;
`

const TopMidSection = () => {
  return (
    <MainWrapper>
      <Grid container spacing={1.5}>
        <Grid container item spacing={2.5}>
          <Grid item xs={1.5}></Grid>
          <Grid item xs={6}>
            <Typography variant='h3'>WHY TO USE OUR APP?</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure corporis ut, praesentium dolorem omnis beatae dolore sint dolor labore, illum nulla unde inventore adipisci! Tempore veniam quaerat deserunt porro!</Typography>
          </Grid>
        </Grid>
        <Grid container item spacing={2.5} style={{marginTop:'50px'}} >
          <Grid item xs={1.5}></Grid>
          <Grid item xs={3}>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
              <img alt='Clock Image' src={clock} height='70px' width='70px'/><br/>
              <Typography variant='h6' fontWeight='600'>ROUND THE CLOCK OPENING HOURS</Typography><br/>
              <Typography fontWeight='lighter' >Have all the time on earth rent the bike for a day/week/month.</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
              <img alt='Clock Image' src={bike} height='70px' width='50px'/><br/>
              <Typography variant='h6' fontWeight='600'>SAFE AND SECURE</Typography><br/>
              <Typography fontWeight='lighter'>Coziness. Safety. Our bike is definite to make your biking experience cent percent joyful.</Typography>
            </Box>
          </Grid>
          <Grid item xs={3} >
            <Box border='0px solid black' height='100%' width='100%' alignItems='center' display='flex' justifyContent='center'>
              <img alt='bike img' src='https://th.bing.com/th/id/R.4c2e30f2d04610489cc79df5e0f30233?rik=kzCLw5VAWP%2fGhQ&riu=http%3a%2f%2fwww.rentexas.com%2fwp-content%2fuploads%2f2011%2f02%2fmotorcycle-rentals.jpg&ehk=DOSz0Mj0aTAHMiuJYoYiTSuWLMSxEv4%2bSliTLePDqoM%3d&risl=&pid=ImgRaw&r=0' height='200' width='400' style={{borderRadius:'10px'}} />
            </Box>
          </Grid>
        </Grid>

        <Grid container item spacing={2.5} style={{marginTop:'50px'}}>
        <Grid item xs={1.5}></Grid>
          <Grid item xs={3}>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                <img alt='Clock Image' src={wallet} height='70px' width='70px'/><br/>
                <Typography variant='h6' fontWeight='600'>QUICKLY CONNECT WITH PEOPLE</Typography>
                <Typography fontWeight='lighter'>Have all the time on earth rent the bike for a day/week/month.</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                <img alt='Clock Image' src={fuel} height='70px' width='70px'/><br/>
                <Typography variant='h6' fontWeight='600'>INITIAL FUEL</Typography>
                <Typography fontWeight='lighter'>Have all the time on earth rent the bike for a day/week/month.</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                <img alt='Clock Image' src={wallet} height='70px' width='70px'/><br/>
                <Typography variant='h6' fontWeight='600'>NO COMMISSION TO APP</Typography>
                <Typography fontWeight='lighter'>Have all the time on earth rent the bike for a day/week/month.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </MainWrapper>
  )
}

export default TopMidSection