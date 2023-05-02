import { Box, Button, Typography, styled } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import car from '../Assests/car.png'

const MainWrapper =styled(Box)`
  background:#a15d1a;
  height:500px;
  width:100%;
  display:flex;
  justify-content:center;
  align-items: center;
`
const LeftWrapper =styled(Box)`
  display: flex;
  flex-direction: column;
  height:80%;
  width:40%;
  justify-content:center;
  align-items: center;
`
const RightWrapper =styled(Box)`
  display: flex;
  flex-direction: column;
  height:100%;
  width:60%;
`
const Text = styled(Typography)`
  color:#fff;
  font-family: 'Poppins, sans-serif';
`
const ButtonBox =styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledButton = styled(Button)`
  background:#fff;
  color:#a15d1a;
`
const ImageBox = styled(Box)`
  justify-content: center;
  align-items: center;
`
const Image =styled('img')({
  height:'400px',
  width:'900px',
  marginBottom:'10px',
  zIndex:'2'
})
const TopSection = () => {
  return (
    <MainWrapper>
      <LeftWrapper>
        <Box display='flex' flexDirection='column'>
          <Text variant='h5' fontWeight='600'>Plan your trip now</Text><br/>
          <Text variant='h4'>Save big with our car rental</Text><br/>
          <Text>To contribute positive change and achieve</Text>
          <Text>our sustainability goals with many extraordinary</Text>
          <br/>
          <ButtonBox>
            <StyledButton size='small' variant="contained">Book Ride</StyledButton>
            <StyledButton size='small' variant="contained">Learn More</StyledButton>
          </ButtonBox>
        </Box>
      </LeftWrapper>
      <RightWrapper>
        <Text variant='h3'>GET 15% OFF YOUR RENTAL</Text>
        <Text>Plan Your trip now</Text>
        <ImageBox>
          <Image alt='Car Image' src={car}/>
        </ImageBox>
      </RightWrapper>
    </MainWrapper>
  )
}

export default TopSection