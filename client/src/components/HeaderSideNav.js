import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Route, Link } from 'react-router-dom'
import MainPage from './MainPage';
import RecipeBuilder from './RecipeBuilder';
import RecipeTable from './RecipeTable';
// import styled from 'styled-components';



const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
//   const Title = styled.div`
//   text-align: right;
//   font-size: 2.5rem;
//   `

export default function HeaderSidenav() {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  return (
    <Box sx={{ flexGrow: 1,  }} >
      <AppBar position="fixed" sx={{backgroundColor:"#C36A2D", color:"black"}}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <h1>Kitchen Software</h1>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[{linkName: 'Home Page', linkRoute: '/'},
            {linkName: 'Recipe Builder', linkRoute: '/recipe_builder'},
            {linkName: 'Recipe List', linkRoute: '/recipe_select'},
            {linkName: 'Prep Sheets', linkRoute: '/home'},
            {linkName: 'Inventory Sheets', linkRoute: '/home'}].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <Link to={text.linkRoute} style={{textDecoration:'none', color:'black'}}>
                  <ListItemText primary={text.linkName} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

      </Drawer>
    </Box>
  );
}