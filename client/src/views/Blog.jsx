import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Component imports
import FullScreenLoader from "../components/FullScreenLoader";
import ErrorComponent from "../components/ErrorComponent";

// Context
import { BlogContext } from "../context/BlogContext";

const Blog = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { blog, setBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setBlog(data);
    navigate("/editBlog");
  };

  const handleDeleteClick = () => {
    setLoading(true);
    fetch(`http://localhost:5000/api/v1/blog/post/${blog.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete the blog.");
        }
        return response.json();
      })
      .then(() => {
        alert("Blog deleted successfully.");
        setBlog(null);
        navigate("/");
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!blog) {
      navigate("/");
      return;
    }

    const apiUrl = `http://localhost:5000/api/v1/blog/post/${blog.id}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the blog details.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [blog, navigate]);

  if (loading) {
    return <FullScreenLoader />;
  }

  if (error) {
    return (
      <ErrorComponent
        errorMessage={error.message}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <Box sx={{ margin: "2px 2px 48px 2px", padding: 2 }}>
      <Typography variant="h4" component="h4" gutterBottom>
        {data?.title}
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="subtitle1" component="p">
          By: {data?.authorName}
        </Typography>
        <Typography variant="subtitle2" component="p">
          Created on: {new Date(data?.creationDate).toDateString()}
        </Typography>
        <Typography variant="subtitle2" component="p">
          Reading Time: {data?.readingTime} minutes
        </Typography>
      </Box>
      <Typography
        variant="body1"
        component="p"
        sx={{ color: "#343a40ff" }}
        paragraph
      >
        {data?.introContent}
      </Typography>
      {data?.subContents?.map(({ subHeading, subContent, _id }) => (
        <Box key={_id} sx={{ marginBottom: 2 }}>
          <Typography variant="h5" component="h5" gutterBottom>
            {subHeading}
          </Typography>
          <Typography variant="body1" component="p" sx={{ color: "#343a40ff" }}>
            {subContent}
          </Typography>
        </Box>
      ))}
      <Typography variant="h5" component="h5" gutterBottom>
        Conclusion
      </Typography>
      <Typography variant="body1" component="p" sx={{ color: "#343a40ff" }}>
        {data?.conclusion}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="info"
          sx={{ margin: "12px 8px" }}
          onClick={handleEditClick}
        >
          Edit Blog
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ margin: "12px 8px" }}
          onClick={handleDeleteClick}
        >
          Delete Blog
        </Button>
      </Box>
    </Box>
  );
};

export default Blog;
