import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FlightIcon from '@mui/icons-material/Flight';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Divider>
      <List>
        <ListItem component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem  component={Link} to="/dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem  component={Link} to="/airports">
          <ListItemIcon><FlightIcon /></ListItemIcon>
          <ListItemText primary="Airports" />
        </ListItem>
        <ListItem  component={Link} to="/videos">
          <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
          <ListItemText primary="Videos" />
        </ListItem>
      </List>
      </Divider>
  );
};

export default Sidebar;
