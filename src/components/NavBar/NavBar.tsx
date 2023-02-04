import React from "react";
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
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar: React.FC<navbarInterface> = ({ totalProducts }) => {
  const menu = ["All products", "Packaging", "Drinkware", "Apparel", "Notebooks", "Backpacks"];
  let navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ boxShadow: 0 }}>
      <Toolbar className="search-bar">
        <Typography variant="h6" component="div" sx={{ marginLeft: "60px", flexGrow: 0.1 }}>
          <Box className="nav-image" onClick={() => navigate("/")}>
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
              <Button
                color="inherit"
                style={{ textTransform: "capitalize" }}
                onClick={() => navigate("/cart")}
              >
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
              <Button
                key={section}
                className="navbar-button"
                style={{
                  fontFamily: "Open Sans",
                  textTransform: "capitalize",
                  fontSize: "15px",
                  color: "#535C67",
                }}
                onClick={() => navigate("/")}
              >
                {section}
              </Button>
            ))}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
