import Blog from "../model/blogModel.js";
import { v4 as uuidv4 } from "uuid";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res
      .status(200)
      .json({ message: "Blogs retrieved successfully", data: blogs });
  } catch (error) {
    console.error("Error retrieving blogs:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred while retrieving blogs" });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOne({ id });

    if (!blog) {
      return res.status(404).json({ message: `Blog with id ${id} not found` });
    }

    res.status(200).json({
      message: `Blog with id ${id} retrieved successfully`,
      data: blog,
    });
  } catch (error) {
    console.error("Error retrieving blog:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred while retrieving the blog" });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blogData = req.body;
    const newBlogData = {
      id: uuidv4(),
      ...blogData,
    };
    const newBlog = new Blog(newBlogData);
    await newBlog.save();
    res
      .status(201)
      .json({ message: "New blog post created successfully", data: newBlog });
  } catch (error) {
    console.error("Error creating blog:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred while creating the blog" });
  }
};

export const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedBlog = await Blog.findOneAndUpdate({ id: id }, updatedData);

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res
      .status(200)
      .json({ message: "Blog updated successfully", date: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred while updating the blog" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBlog = await Blog.deleteOne({ id: id });

    console.log(deletedBlog);

    if (deletedBlog.deletedCount === 0) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error updating blog:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the blog" });
  }
};
