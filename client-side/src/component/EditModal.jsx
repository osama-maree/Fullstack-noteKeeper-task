import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
  title: Yup.string().min(5).required("Title is required"),
  content: Yup.string().min(5).required("Content is required"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #1de9b6 !important",
  outline: "2px solid #1de9b6 !important",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ handleClose, open, card, setNote }) {
  const handleSubmit = (values, { resetForm }) => {
    handleUpdate(values);
    resetForm();
  };
  const handleUpdate = (data) => {
    fetch("http://localhost:3001/api/notes/v1/" + card._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setNote((prev) =>
          prev.map((note) =>
            note._id === responseData.updateNote._id
              ? responseData.updateNote
              : note
          )
        );
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              mb={1}
              component="h2"
              sx={{ textAlign: "center", color: "#1de9b6 " }}
            >
              Enter New Data
            </Typography>
            <Divider />

            <Formik
              initialValues={{ title: card.title, content: card.content }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form style={{ marginTop: "1rem" }}>
                <div className="mb-2">
                  <label htmlFor="title" className="mainColor">
                    Title:
                  </label>
                  <Field
                    type="text"
                    id="title"
                    className="InputStyle"
                    name="title"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="mainColor">
                    content:
                  </label>
                  <Field
                    type="text"
                    id="content"
                    className="InputStyle"
                    name="content"
                  />
                  <ErrorMessage
                    name="content"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#1de9b6 ",
                      "&:hover": { backgroundColor: "#1de9b6 " },
                      marginTop: "1rem",
                      width: "100%",
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </Form>
            </Formik>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
