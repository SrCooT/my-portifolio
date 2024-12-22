import React from "react";
import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";



const NavBar = () => {
  const StyledToolBar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  }));

  return (
    <AppBar position="sticky" color="primary">
      <StyledToolBar>
        <MenuItem component={Link} to="/">Home Page</MenuItem>
        <MenuItem component={Link} to="/About">About</MenuItem>
        <MenuItem component={Link} to="/skills">Skills</MenuItem>
        <MenuItem component={Link} to="/projects">Projects</MenuItem>
      </StyledToolBar>
    </AppBar>
  );
};

export default NavBar;
