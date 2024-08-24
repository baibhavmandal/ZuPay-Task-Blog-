import React, { createContext, useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState(null);

  return (
    <BlogContext.Provider value={{ blog, setBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
