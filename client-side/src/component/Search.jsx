import React from "react";
import { TextField,  Grid, Container } from "@mui/material";

function SearchForm({ onChange }) {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="text-search"
            label="Search Title"
            variant="outlined"
            placeholder="Enter text to search"
            onChange={onChange}
            name="title"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="content-search"
            label="Search Content"
            variant="outlined"
            placeholder="Enter content to search"
            name="content"
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SearchForm;
