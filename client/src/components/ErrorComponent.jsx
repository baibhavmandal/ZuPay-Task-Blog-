import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ErrorComponent = ({ errorMessage, onRetry }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        zIndex: 9999, // Ensure it covers all other content
      }}
    >
      <Typography variant="h6" color="error" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        {errorMessage || "An unexpected error has occurred."}
      </Typography>
      <Button variant="contained" color="error" onClick={onRetry}>
        Retry
      </Button>
    </Box>
  );
};

export default ErrorComponent;
