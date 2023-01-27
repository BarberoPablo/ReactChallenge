import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export const Home = () => {
  const [menu, setMenu] = useState([
    "All products",
    "Packaging",
    "Drinkware",
    "Apparel",
    "Notebooks",
    "Backpacks",
  ]);

  return (
    <Toolbar sx={{ backgroundColor: "#E6E8E9" }}>
      <Typography variant="h6" component="div" sx={{}}>
        {menu.length &&
          menu.map((section) => (
            <Button key={section} className="menu-button">
              {section}
            </Button>
          ))}
      </Typography>
    </Toolbar>
  );
};
