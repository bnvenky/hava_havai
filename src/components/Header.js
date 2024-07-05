import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          hava havai
        </Typography>
        <Avatar alt="Profile Picture" src="/profile.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
