import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import React from "react";


const NavBar = () => {
  const StyledTooBar = styled(Toolbar)(() => ({
    display:"flex",
    justifyContent:"space-evenly",
  }));

  
    return (
      <>
          <AppBar position="absolute">
            <StyledTooBar>
            <MenuItem>About</MenuItem>
            <MenuItem>skills</MenuItem>
            <MenuItem>Projects</MenuItem>
            </StyledTooBar>
            </AppBar>
        
      </>
    )
  }
  
  export default NavBar

  