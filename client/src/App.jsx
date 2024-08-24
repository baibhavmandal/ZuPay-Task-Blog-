import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Views
import Home from "./views/Home";
import Blog from "./views/Blog";
import CreateBlog from "./views/CreateBlog";
import EditBlog from "./views/EditBlog";

// Layout
import Layout from "./layout/Layout";

// Context
import { BlogProvider } from "./context/BlogContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e9ecefff",
    },
    secondary: {
      main: "#dee2e6ff",
    },
    text: {
      primary: "#343a40ff",
      secondary: "#495057ff",
    },
    background: {
      default: "#f8f9faff",
      paper: "#e9ecefff",
    },
    divider: "#ced4daff",
  },
  typography: {
    allVariants: {
      color: "#343a40f",
    },
    h1: {
      color: "#212529ff",
    },
    h2: {
      color: "#212529ff",
    },
    h3: {
      color: "#212529ff",
    },
    h4: {
      color: "#212529ff",
    },
    h5: {
      color: "#212529ff",
    },
    p: {
      color: "#343a40f",
    },
    subtitle1: {
      color: "#495057ff",
    },
    subtitle2: {
      color: "#495057ff",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/addBlog",
        element: <CreateBlog />,
      },
      {
        path: "/editBlog",
        element: <EditBlog />,
      },
    ],
  },
]);

const App = () => {
  return (
    <BlogProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </BlogProvider>
  );
};

export default App;
