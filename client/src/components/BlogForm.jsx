import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const BlogForm = ({ blogData = {}, onCancel, onSubmit }) => {
  const [formState, setFormState] = useState({
    title: "",
    introContent: "",
    subContents: [{ subHeading: "", subContent: "" }],
    authorName: "",
    readingTime: "",
    conclusion: "",
    ...blogData,
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubContentChange = (index, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const updatedSubContents = formState.subContents.map((subContent, i) =>
      i === index ? { ...subContent, [name]: value } : subContent
    );
    setFormState({ ...formState, subContents: updatedSubContents });
  };

  const addSubContent = () => {
    setFormState({
      ...formState,
      subContents: [
        ...formState.subContents,
        { subHeading: "", subContent: "" },
      ],
    });
  };

  const removeSubContent = (index) => {
    const updatedSubContents = formState.subContents.filter(
      (_, i) => i !== index
    );
    if (updatedSubContents.length > 0) {
      setFormState({ ...formState, subContents: updatedSubContents });
    } else {
      alert("At least one sub content is required.");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={formState.title}
          onChange={handleInputChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#495057ff",
              fontFamily: "Arial",
              fontWeight: "bold",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ced4daff",
                borderWidth: "2px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#495057ff",
              fontWeight: "bold",
            },
          }}
          required
        />
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          label="Introductory Content"
          name="introContent"
          value={formState.introContent}
          onChange={handleInputChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#495057ff",
              fontFamily: "Arial",
              fontWeight: "bold",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ced4daff",
                borderWidth: "2px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#495057ff",
              fontWeight: "bold",
            },
          }}
          required
          multiline
          minRows={4}
        />
      </Box>
      <Typography variant="h6">Sub-Contents</Typography>
      {formState.subContents.map((subContent, index) => (
        <Grid container spacing={2} key={index} sx={{ margin: "16px 0" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Sub-Heading"
              name="subHeading"
              value={subContent.subHeading}
              onChange={(e) => handleSubContentChange(index, e)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#495057ff",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ced4daff",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#495057ff",
                  fontWeight: "bold",
                },
              }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <IconButton
              onClick={() => removeSubContent(index)}
              color="error"
              sx={{ margin: "4px" }}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Sub-Content"
              name="subContent"
              value={subContent.subContent}
              onChange={(e) => handleSubContentChange(index, e)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#495057ff",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ced4daff",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#495057ff",
                  fontWeight: "bold",
                },
              }}
              required
              multiline
              minRows={4}
            />
          </Grid>
        </Grid>
      ))}
      <Box mb={2}>
        <Button
          variant="contained"
          onClick={addSubContent}
          sx={{ margin: "2px 2px" }}
          color="info"
        >
          Add Sub-Content
        </Button>
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          label="Author Name"
          name="authorName"
          value={formState.authorName}
          onChange={handleInputChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#495057ff",
              fontFamily: "Arial",
              fontWeight: "bold",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ced4daff",
                borderWidth: "2px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#495057ff",
              fontWeight: "bold",
            },
          }}
          required
        />
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          label="Reading Time (minutes)"
          name="readingTime"
          value={formState.readingTime}
          onChange={handleInputChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#495057ff",
              fontFamily: "Arial",
              fontWeight: "bold",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ced4daff",
                borderWidth: "2px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#495057ff",
              fontWeight: "bold",
            },
          }}
          required
          type="number"
        />
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          label="Conclusion"
          name="conclusion"
          value={formState.conclusion}
          onChange={handleInputChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#495057ff",
              fontFamily: "Arial",
              fontWeight: "bold",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ced4daff",
                borderWidth: "2px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#495057ff",
              fontWeight: "bold",
            },
          }}
          required
          multiline
          minRows={4}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="contained" onClick={handleCancel} color="secondary">
          Cancel
        </Button>
      </Box>
    </form>
  );
};

export default BlogForm;
