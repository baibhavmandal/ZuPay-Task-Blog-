import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ mb: 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 4 }}>
          ZuPay Task
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="text"
            color="success"
            onClick={() => {
              navigate("/");
            }}
            sx={{ marginInline: "2px" }}
          >
            Home
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => {
              navigate("/addBlog");
            }}
            sx={{ marginInline: "2px" }}
          >
            Add Blog
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
