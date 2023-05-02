import React from 'react'
import { Box, Button, Typography, styled } from '@mui/material'
import apple from '../Assests/apple.jpg'
import google from '../Assests/google.jpg'
import man from '../Assests/man.png'

const MainWrapper =styled(Box)`
  height:500px;
  width:100%;
  display:flex;
  justify-content:center;
  align-items: center;
  font-family: 'Poppins, sans-serif';
`
const LeftWrapper =styled(Box)`
  display: flex;
  flex-direction: column;
  height:100%;
  width:45%;
`
const RightWrapper =styled(Box)`
  display: flex;
  flex-direction: column;
  height:100%;
  width:45%;
`
const BottomSection = () => {
  return (
    <MainWrapper>
      <LeftWrapper>
        <Typography variant='h3' fontWeight='600' color='#a15d1a'>60000+</Typography>
        <Typography variant='h2' fontWeight='600'>Downloaded Apps.</Typography>
        <Typography variant='h2' fontWeight='600'> We Made It Easy For You.</Typography>
        <Typography marginTop='20px'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas molestiae neque iure? Eum distinctio porro non dolorem quisquam. Commodi sint earum culpa quos inventore enim laborum aliquam fugit eos deleniti! Ab rem expedita quis illo numquam nesciunt voluptatem officia voluptate beatae magni aspernatur minima, maxime a, deleniti, dolorem consequuntur neque odit repellendus voluptas? Odio consequuntur voluptatibus modi sequi eius ipsa?</Typography>
        <Box display='flex' justifyContent='space-between' marginTop='20px'>
          <Button style={{height:'70px',width:'180px',borderRadius:'20px'}}><img src={apple} style={{height:'70px',width:'180px',borderRadius:'20px'}} /></Button>
          <Button style={{height:'70px',width:'180px',marginRight:'10px'}}><img src={google} style={{height:'70px',width:'180px'}} /></Button>
        </Box>
      </LeftWrapper>
      <RightWrapper>
        <img src={man} height='90%' width='90%' />
      </RightWrapper>
    </MainWrapper>
  )
}

export default BottomSection;