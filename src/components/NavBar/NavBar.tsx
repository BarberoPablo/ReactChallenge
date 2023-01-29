import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  InputBase,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./NavBar.css";
/* import swagCharm from "../assets/swagCharm.svg"; */
import swagCharm from "../../../public/swagcharm.png";

export function NavBar() {
  const [menu, setMenu] = useState([
    "All products",
    "Packaging",
    "Drinkware",
    "Apparel",
    "Notebooks",
    "Backpacks",
  ]);

  return (
    <AppBar sx={{ width: "100%", backgroundColor: "#091625" }} position="static">
      <Toolbar className="search-bar">
        <Typography variant="h6" component="div" sx={{ marginLeft: "60px", flexGrow: 0.1 }}>
          <div className="nav-image">
            <img src={swagCharm} />
          </div>
        </Typography>

        <div
          style={{ backgroundColor: "#FFFFFF", borderRadius: "20px", border: "1px solid inherit" }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>

          <InputBase className="navbar-input" sx={{ ml: 30 }} placeholder="Search products" />
        </div>

        <Stack direction="row" spacing={2}>
          <Button color="inherit">
            <AccountCircleIcon /> Sign in
          </Button>
          <Badge badgeContent={8} color="error">
            <Button color="inherit">C</Button>
          </Badge>
        </Stack>
      </Toolbar>

      <Toolbar className="select-menu-container">
        <Typography
          className="select-menu"
          variant="h6"
          component="div"
          sx={{ marginLeft: "60px" }}
        >
          {menu.length &&
            menu.map((section) => (
              <Button key={section} className="menu-button">
                {section}
              </Button>
            ))}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
