import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            sx={{ mr: 2, color: "inherit" }}
            id="demo-positioned-button"
            edge="start"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>
              <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/mylist">My List</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/popularlists">Popular Lists</NavLink>
            </MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            People Lists
          </Typography>
          <MenuIcon sx={{ ml: 2, visibility: "hidden" }} />{" "}
          {/*This Hidden icon is to balance the flex box items so that the website title is centered*/}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
