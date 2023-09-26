import React from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  title: yup.string().min(5).required("Title is required"),
  content: yup.string().min(5).required("Content is required"),
});

function AddNote() {
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container maxWidth="md">
      <form onSubmit={formik.handleSubmit}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ color: "#78909c !important" }}
          my={3}
        >
          Add New Note
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Content"
              name="content"
              multiline
              rows={4}
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.content)}
              helperText={formik.touched.content && formik.errors.content}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              disabled={!formik.isValid || formik.isSubmitting}
              sx={{
                backgroundColor: "#1de9b6 !important",
                "&:hover": { backgroundColor: "#1de9b6 !important" },
              }}
            >
              Add Note
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default AddNote;
