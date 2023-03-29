import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function LoginHeader() {
    return (
        <AppBar position="static" sx={{backgroundColor:"#C36A2D", color:"black"}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <h1>Office Chef</h1>
        </Toolbar>
      </AppBar>
    )
}