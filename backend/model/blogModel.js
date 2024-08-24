import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const subContent = new mongoose.Schema({
  subHeading: {
    type: String,
    required: true,
  },
  subContent: {
    type: String,
    required: true,
  },
});

const blog = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  introContent: {
    type: String,
    required: true,
  },
  subContents: [subContent],
  authorName: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  readingTime: {
    type: Number,
    required: true,
  },
  conclusion: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", blog);

export default Blog;
