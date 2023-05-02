import { Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import StarHalfTwoToneIcon from '@mui/icons-material/StarHalfTwoTone';
import hyderabad from '../Assests/hyderabad.jpg'
import banglore from '../Assests/banglore.jpg'
import mumbai from '../Assests/mumbai.jpg'
import kerala from '../Assests/kerala.jpg'
import chennai from '../Assests/chennai .jpg'
import goa from '../Assests/goa.jpg'
import delhi from '../Assests/delhi.jpg'
import kolkata from '../Assests/kolkata.jpg'
import gujrat from '../Assests/gujrat.jpg'


const MidBottomSection = () => {
    return (
        <Box height='600px' width='95%' marginLeft='50px'>
            <Typography variant='h5' textAlign='center' fontWeight='600'>Our Presence</Typography><br />
            <Typography textAlign='center'>More Destinations. More Ease. More Affordable.</Typography>
            <Box display='flex' justifyContent='space-between'>
                <Grid container spacing={1} style={{ display: 'flex', height: '400px', width: '45%', alignItems: 'center', justifyContent: 'center', marginLeft: '3%', marginTop: '10px' }}>
                    <Grid item xs={6}>
                        <Box alignItems='flex-start'>
                            <Typography variant='h6'>15+</Typography>
                            <Typography variant='h6'>Cities</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box alignItems='flex-end'>
                            <Typography variant='h6'>6000+</Typography>
                            <Typography variant='h6'>Bikes</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box alignItems='flex-start'>
                            <Typography variant='h6'>50000+</Typography>
                            <Typography variant='h6'>Happy Customers</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box alignItems='flex-start'>
                            <Typography variant='h6'>4.5/5<StarHalfTwoToneIcon /> </Typography>
                            <Typography variant='h6'>1200+ Reviews</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box style={{ display: 'flex', height: '400px', width: '45%', alignItems: 'center', justifyContent: 'center', marginRight: '3%', marginTop: '30px' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4} marginBottom='50px'>
                            <Box height='100px' width='100px'>
                                <img alt='hyderabad' src={hyderabad} height='100px' width='100px' style={{borderRadius:'10px'}} />
                                <Typography textAlign={'center'}>Hyderabad</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box height='100px' width='100px'>
                                <img alt='hyderabad' src={banglore} height='100px' width='100px' style={{borderRadius:'10px'}} />
                                <Typography textAlign={'center'}>Banglore</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box height='100px' width='100px'>
                                <img alt='hyderabad' src={mumbai} height='100px' width='100px' style={{borderRadius:'10px'}} />
                                <Typography textAlign={'center'}>Mumbai</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} marginBottom='50px'>
                            <Box height='100px' width='100px'>
                                <img alt='hyderabad' src={kerala} height='100px' width='100px' style={{borderRadius:'10px'}} />
                                <Typography textAlign={'center'}>kerala</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box height='100px' width='100px'>
                                <img alt='hyderabad' src={chennai} height='100px' width='100px' style={{borderRadius:'10px'}} />
                                <Typography textAlign={'center'}>Chennai</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box height='100px' width='100px'>
                                <img alt='hyderabad' src={goa} height='100px' width='100px' style={{borderRadius:'10px'}} />
                                <Typography textAlign={'center'}>Goa</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box height='100px' width='100px'>
                                <img alt='hyderabad' src={delhi} height='100px' width='100px' style={{borderRadius:'10px'}} />
                                <Typography textAlign={'center'}>New Delhi</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box height='100px' width='100px'>
                                <img alt='hyderabad' src={kolkata} height='100px' width='100px' style={{borderRadius:'10px'}} />
                                <Typography textAlign={'center'}>Kolkata</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box height='100px' width='100px'>
                                <img alt='hyderabad' src={gujrat} height='100px' width='100px' style={{borderRadius:'10px'}} />
                                <Typography textAlign={'center'}>Gujarat</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default MidBottomSection