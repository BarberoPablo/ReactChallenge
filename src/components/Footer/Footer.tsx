import React from "react";
import { Box, Select, NativeSelect } from "@mui/material/";
import { Call, FacebookRounded, Twitter, Instagram, LinkedIn, YouTube } from "@mui/icons-material/";
import "./Footer.css";
import swagCharm from "../assets/swagCharm.svg";

export const Footer = () => {
  const languajes = ["English", "Spanish"];
  const countries = ["United States", "Argentina"];

  const iconStyles = {
    backgroundColor: "#535C67",
    padding: "7px",
    marginLeft: "7px",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    color: "white",
  };

  const countryHandler = (colection: Array<any>) => {
    return (
      <Box>
        <NativeSelect>
          {colection.map((country: string) => {
            return (
              <option key={country} value={country}>
                {country}
              </option>
            );
          })}
        </NativeSelect>
      </Box>
    );
  };

  return (
    <Box className="footer-container">
      <Box className="first-footer-columns">
        <Box className="first-column">
          <img src={swagCharm} />
          <p>
            We sell custom products for all your needs. Packs and bulks products that you will enjoy
          </p>
          <p>
            <Call />
            <b>+1-202-555-0129</b>
          </p>
          <Box className="footer-all-icons">
            <FacebookRounded sx={{ width: "38px", height: "38px", color: "#535C67" }} />
            <Twitter className="footer-icon" sx={iconStyles} />
            <Instagram className="footer-icon" sx={iconStyles} />
            <LinkedIn className="footer-icon" sx={iconStyles} />
            <YouTube className="footer-icon" sx={iconStyles} />
          </Box>
        </Box>

        <Box className="footer-column">
          <p className="footer-title">Our company</p>
          <p>About us</p>
          <p>FAQ</p>
          <p>Partnerships</p>
          <p>Sustainability</p>
          <p>Blog</p>
        </Box>
        <Box className="footer-column">
          <p className="footer-title">How can we help</p>
          <p>Place a ticket</p>
          <p>Track your order</p>
          <p>Help center</p>
        </Box>
        <Box className="footer-column">
          <p className="footer-title">Information</p>
          <p>Contact us</p>
          <p>Live chat</p>
          <p>Privacy</p>
          <p>Terms of use</p>
        </Box>
      </Box>
      <Box className="second-footer-column">
        <p>© 2022 Customer Products. All rights reserved.</p>

        <Box className="footer-region">Region: {countryHandler(countries)}</Box>
        <Box className="footer-region">Languaje: {countryHandler(languajes)}</Box>
      </Box>
    </Box>
  );
};
