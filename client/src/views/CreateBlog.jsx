import React, { useContext, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Component imports
import BlogForm from "../components/BlogForm";
import FullScreenLoader from "../components/FullScreenLoader";
import ErrorComponent from "../components/ErrorComponent";

// model
import { validateBlogDetails } from "../models/BlogModel";
import { BlogContext } from "../context/BlogContext";

const CreateBlog = () => {
  const navigate = useNavigate();
  const { setBlog } = useContext(BlogContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCancel = () => {
    navigate("/blog");
  };

  const handleSubmit = (data) => {
    const { valid, message } = validateBlogDetails(data);
    if (!valid) {
      alert(message);
      return;
    }
    setLoading(true);
    fetch("http://localhost:5000/api/v1/blog/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cannot add blog");
        }
        return response.json();
      })
      .then((res) => {
        const { data } = res;
        setBlog(data); // You need to import and use setBlog
        navigate("/blog");
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  if (loading) {
    return <FullScreenLoader />;
  }

  if (error) {
    return (
      <ErrorComponent
        errorMessage={error.message}
        onRetry={() => handleSubmit(data)}
      />
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        marginTop: "2px",
        marginBottom: "48px",
        padding: 2,
      }}
    >
      <Typography variant="h4" component="h4">
        Create New Blog
      </Typography>
      <BlogForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </Box>
  );
};

export default CreateBlog;
