import { param, check, body, validationResult } from "express-validator";

export const validateBlogId = [
  param("id")
    .isUUID()
    .withMessage("Invalid blog ID format, must be a UUID")
    .notEmpty()
    .withMessage("ID is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateBlog = [
  check("title")
    .isString()
    .withMessage("Title must be a string")
    .notEmpty()
    .withMessage("Title is required"),

  check("introContent")
    .isString()
    .withMessage("Introductory content must be a string")
    .notEmpty()
    .withMessage("Introductory content is required"),

  body("subContents")
    .isArray({ min: 1 })
    .withMessage("Sub-contents must be an array with at least one item"),

  body("subContents.*.subHeading")
    .isString()
    .withMessage("Each sub-heading must be a string")
    .notEmpty()
    .withMessage("Sub-heading is required for each sub-content"),

  body("subContents.*.subContent")
    .isString()
    .withMessage("Each sub-content must be a string")
    .notEmpty()
    .withMessage("Sub-content is required for each sub-heading"),

  check("authorName")
    .isString()
    .withMessage("Author name must be a string")
    .notEmpty()
    .withMessage("Author name is required"),

  check("readingTime")
    .isInt({ min: 1 })
    .withMessage("Reading time must be a positive integer"),

  check("conclusion")
    .isString()
    .withMessage("Conclusion must be a string")
    .notEmpty()
    .withMessage("Conclusion is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
