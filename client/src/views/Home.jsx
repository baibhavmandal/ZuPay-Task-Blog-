import React, { useContext, useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Component imports
import BlogList from "../components/BlogList";
import FullScreenLoader from "../components/FullScreenLoader";
import ErrorComponent from "../components/ErrorComponent";

// Context import
import { BlogContext } from "../context/BlogContext";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { setBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const fetchData = () => {
    const apiUrl = "http://localhost:5000/api/v1/blog/post";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.data || []); // Ensure data is an array
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "An unexpected error occurred");
        setLoading(false);
      });
  };

  const handleClick = (val) => {
    setBlog(val);
    navigate("/blog");
  };

  const handleRetry = () => {
    setLoading(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <FullScreenLoader />;
  }

  if (error) {
    return <ErrorComponent errorMessage={error} onRetry={handleRetry} />;
  }

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        marginTop: "2px",
        marginBottom: "48px",
        padding: 2,
      }}
    >
      {data.length > 0 ? (
        data.map((val, index) => (
          <BlogList
            key={index}
            title={val.title}
            authorName={val.authorName}
            creationDate={val.creationDate}
            readingTime={val.readingTime}
            introContent={val.introContent}
            onClick={() => handleClick(val)}
          />
        ))
      ) : (
        <Typography variant="h6" color="textSecondary">
          No blogs available.
        </Typography>
      )}
    </Stack>
  );
};

export default Home;
