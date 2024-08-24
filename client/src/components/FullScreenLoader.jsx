import React from "react";
import { CircularProgress, Box } from "@mui/material";

const FullScreenLoader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999, // Ensure it covers all other content
      }}
    >
      <CircularProgress color="info" />
    </Box>
  );
};

export default FullScreenLoader;
