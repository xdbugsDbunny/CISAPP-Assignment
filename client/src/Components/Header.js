import React, {useState} from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, CssBaseline, Button, Drawer, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const StyledHeader=styled(AppBar)`
    background: #f2f2f2;
    height: 55px;
`

const Header = () => {

    return (
        <Box sx={{ display: "flex"}}>
            <StyledHeader>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow:1,display:{ xs: "none",sm:"block",color:'teal' } }}>
                        CISAPP
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Button sx={{ color: "black",fontWeight:600 }}>Home</Button>
                        <Button sx={{ color: "black",fontWeight:600 }}>About</Button>
                        <Button sx={{ color: "black",fontWeight:600 }}>Contact</Button>
                    </Box>
                </Toolbar>
            </StyledHeader>
            <Toolbar />
        </Box>
    )
}

export default Header