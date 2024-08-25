import React, { useContext, useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Component imports
import BlogForm from "../components/BlogForm";
import FullScreenLoader from "../components/FullScreenLoader";
import ErrorComponent from "../components/ErrorComponent";

// Context import
import { BlogContext } from "../context/BlogContext";

// Model
import { validateBlogDetails } from "../models/BlogModel";

const EditBlog = () => {
  const { blog } = useContext(BlogContext);
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!blog) {
      alert("Blog not found");
      navigate("/");
      return;
    }
    setId(blog.id);
  }, [blog, navigate]);

  const blogData = {
    title: blog?.title || "",
    introContent: blog?.introContent || "",
    subContents: blog?.subContents || [{ subHeading: "", subContent: "" }],
    authorName: blog?.authorName || "",
    readingTime: blog?.readingTime || "",
    conclusion: blog?.conclusion || "",
  };

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
    fetch(`https://zupay-task-blog.onrender.com/api/v1/blog/post/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Send updated blog data
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update the blog.");
        }
        return response.json();
      })
      .then((res) => {
        alert("Blog updated successfully.");
        setLoading(false);
        navigate("/");
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
        onRetry={() => handleSubmit(blogData)}
      />
    );
  }

  return (
    <Box sx={{ margin: "2px 2px 48px 2px", padding: 2 }}>
      <Typography variant="h4" component="h4">
        Edit Blog
      </Typography>
      <BlogForm
        blogData={blogData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </Box>
  );
};

export default EditBlog;
