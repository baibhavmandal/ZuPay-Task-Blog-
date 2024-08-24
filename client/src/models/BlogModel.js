export const validateBlogDetails = (blogDetails) => {
  const {
    title,
    introContent,
    subContents,
    authorName,
    readingTime,
    conclusion,
  } = blogDetails;

  // Helper function to count words
  const wordCount = (text) => text.trim().split(/\s+/).length;

  // Validate title
  if (!title.trim()) {
    return { valid: false, message: "Title is required." };
  }

  // Validate introductory content
  if (wordCount(introContent) <= 150) {
    return {
      valid: false,
      message: "Intro content must be more than 150 words.",
    };
  }

  // Validate sub-contents
  for (let i = 0; i < subContents.length; i++) {
    const { subHeading, subContent } = subContents[i];
    if (!subHeading.trim()) {
      return { valid: false, message: `Sub-heading ${i + 1} is required.` };
    }
    if (wordCount(subContent) <= 150) {
      return {
        valid: false,
        message: `Sub-content ${i + 1} must be more than 150 words.`,
      };
    }
  }

  // Validate author name
  if (!authorName.trim()) {
    return { valid: false, message: "Author name is required." };
  }

  // Validate reading time
  if (isNaN(readingTime) || readingTime <= 0) {
    return { valid: false, message: "Reading time must be a positive number." };
  }

  // Validate conclusion
  if (wordCount(conclusion) <= 150) {
    return { valid: false, message: "Conclusion must be more than 150 words." };
  }

  // All validations passed
  return { valid: true, message: "All details are valid." };
};
