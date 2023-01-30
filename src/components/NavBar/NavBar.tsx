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
import { Search, ShoppingCart, AccountCircle } from "@mui/icons-material/";
import { navbarInterface } from "../assets/products-JSON";

import swagCharm from "../assets/swagcharm.png";
import "./NavBar.css";

export const NavBar: React.FC<navbarInterface> = ({ totalProducts }) => {
  const menu = ["All products", "Packaging", "Drinkware", "Apparel", "Notebooks", "Backpacks"];

  return (
    <AppBar className="navbar-container" position="static">
      <Toolbar className="search-bar">
        <Typography variant="h6" component="div" sx={{ marginLeft: "60px", flexGrow: 0.1 }}>
          <Box className="nav-image">
            <img src={swagCharm} />
          </Box>
        </Typography>

        <Box className="navbar-input">
          <IconButton type="button" sx={{ p: "5px", fontFamily: "inherit" }} aria-label="search">
            <Search />
          </IconButton>
          <InputBase placeholder="Search products" />
        </Box>

        <Box className="navbar-buttons" sx={{ marginRight: "60px" }}>
          <Stack direction="row" spacing={2}>
            <Button
              className="navbar-button"
              color="inherit"
              style={{ textTransform: "capitalize" }}
            >
              <AccountCircle /> Sign in
            </Button>
            <Badge badgeContent={totalProducts} color="error">
              <Button color="inherit" style={{ textTransform: "capitalize" }}>
                <ShoppingCart />
                Cart
              </Button>
            </Badge>
          </Stack>
        </Box>
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
};
