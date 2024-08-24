import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#e9ecefff",
        color: "#495057ff",
        textAlign: "center",
        py: 2,
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Copyrights belong to Baibhav Mandal.
        All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
