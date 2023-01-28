import React from "react";
import { Box, FormControl, Select, SelectChangeEvent, MenuItem, InputLabel } from "@mui/material/";
import {
  Home,
  Search,
  Settings,
  Call,
  FacebookRounded,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material/";
import "./Footer.css";

export const Footer = () => {
  const [languaje, setLanguaje] = React.useState("Englisgh");
  const [value, setValue] = React.useState(0);
  const iconStyles = {
    backgroundColor: "#535C67",
    padding: "7px",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    color: "white",
  };

  const handleChange = (event: SelectChangeEvent) => {
    setLanguaje(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E6E8E9",
      }}
    >
      <Box className="footer-first-column">
        <img src="" />
        <p>
          We sell custom products for all your needs. Packs and bulks products that you will enjoy
        </p>
        <p>
          {/* "inherit" | "disabled" | "action" | "primary" | "secondary" | 
          "error" | "info" | "success" | "warning" | undefined */}
          <Call />
          +1-202-555-0129
        </p>
        <Box
          sx={{
            "& > :not(style)": {
              m: 2,
            },
          }}
        >
          <FacebookRounded sx={{ width: "38px", height: "38px", color: "#535C67" }} />
          <Twitter className="footer-icon" sx={iconStyles} />
          <Instagram className="footer-icon" sx={iconStyles} />
          <LinkedIn className="footer-icon" sx={iconStyles} />
          <YouTube className="footer-icon" sx={iconStyles} />
        </Box>
        <Settings />
      </Box>

      <Box>
        <p>Our company</p>
        <p>About us</p>
        <p>FAQ</p>
        <p>Partnerships</p>
        <p>Sustainability</p>
        <p>Blog</p>
      </Box>
      <Box>
        <p>How can we help</p>
        <p>Place a ticket</p>
        <p>Track your order</p>
        <p>Help center</p>
      </Box>
      <Box>
        <p>Information</p>
        <p>Contact us</p>
        <p>Live chat</p>
        <p>Privacy</p>
        <p>Terms of use</p>
      </Box>

      <p>© 2022 Customer Products. All rights reserved.</p>
      <p>© 2022 Customer Products. All rights reserved.</p>
      <p>© 2022 Customer Products. All rights reserved.</p>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          defaultValue={"dfhfdhhfd"}
          value={languaje}
          onChange={handleChange}
          displayEmpty
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
