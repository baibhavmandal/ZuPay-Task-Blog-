import React from "react";
import { Box, Typography } from "@mui/material";

const BlogList = ({
  title,
  authorName,
  creationDate,
  readingTime,
  introContent,
  onClick,
}) => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        my: 2,
        border: 1,
        borderColor: "#ced4daff",
        borderRadius: 1,
        p: 1,
      }}
      onClick={() => onClick()}
    >
      <Typography variant="h5" component="h5">
        {title}
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="subtitle1" component="p">
          By: {authorName}
        </Typography>
        <Typography variant="subtitle2" component="p">
          Created on: {new Date(creationDate).toDateString()}
        </Typography>
        <Typography variant="subtitle2" component="p">
          Reading Time: {readingTime} minutes
        </Typography>
      </Box>
      <Typography variant="p" component="p" sx={{ color: "#343a40ff" }}>
        {introContent}
      </Typography>
    </Box>
  );
};

export default BlogList;
