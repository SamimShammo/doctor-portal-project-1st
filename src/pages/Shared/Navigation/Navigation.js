import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static">
                <Toolbar sx={{ alignItems: 'center' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    <Link to="/home" style={{ color: 'white', textDecoration: 'none', marginRight: '30px', fontWeight: 600 }}>
                        Home
                    </Link>
                    <Link to="/appointment" style={{ color: 'white', textDecoration: 'none', marginRight: '30px', fontWeight: 600 }}>
                        Appointment
                    </Link>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;