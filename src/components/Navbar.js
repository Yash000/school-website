// src/components/Navbar.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { text: 'Home', icon: <HomeIcon />, link: '/' },
    { text: 'About Us', icon: <InfoIcon />, link: '/about' },
    { text: 'Academics', icon: <SchoolIcon />, link: '/academics' },
    { text: 'Admissions', icon: <AssignmentIcon />, link: '/admissions' },
    { text: 'Faculty', icon: <PeopleIcon />, link: '/faculty' },
    { text: 'Students', icon: <StarIcon />, link: '/students' },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Springdale Public School
          </Typography>
          <div style={{ display: 'flex' }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={RouterLink}
                to={item.link}
                style={{ marginLeft: '8px' }}
              >
                {item.text}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List style={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem button key={item.text} component={RouterLink} to={item.link} onClick={handleDrawerToggle}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
