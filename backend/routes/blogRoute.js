import express from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlogById,
  deleteBlog,
} from "../controllers/blogController.js";
import {
  validateBlogId,
  validateBlog,
} from "../middleware/validationMiddleware.js";

const router = express.Router();

router.get("/post", getAllBlogs);
router.get("/post/:id", validateBlogId, getBlogById);
router.post("/post", validateBlog, createBlog);
router.put("/post/:id", validateBlogId, validateBlog, updateBlogById);
router.delete("/post/:id", validateBlogId, deleteBlog);

export default router;
