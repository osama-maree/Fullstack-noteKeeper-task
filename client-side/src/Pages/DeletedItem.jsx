import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useState } from "react";
import ListItem from "../component/ListItem.jsx";

const DeletedItem = () => {
  const [note, setNote] = useState([]);
  const fetchNote = () => {
    fetch("http://localhost:3001/api/notes/v1/true")
      .then((response) => response.json())
      .then((data) => {
        setNote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchNote();
  }, []);
  const deleteNote = (id) => {
    fetch("http://localhost:3001/api/notes/v1/" + id, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNote(note.filter((n) => n._id !== data.deleteNote._id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Grid container spacing={2}>
      {note
        ? note.map((card) => (
            <ListItem key={card._id} card={card} deleteNote={deleteNote} />
          ))
        : "loading..."}
    </Grid>
  );
};

export default DeletedItem;
