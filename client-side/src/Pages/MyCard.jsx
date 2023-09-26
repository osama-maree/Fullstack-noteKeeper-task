import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useState } from "react";
import ListItem from "../component/ListItem.jsx";
import SearchForm from "../component/Search.jsx";

const CardGrid = () => {
  const [note, setNote] = useState([]);
  const [input, setInputs] = useState({ title: "", content: "" });

  const fetchNote = () => {
    fetch("http://localhost:3001/api/notes/v1/false")
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
  useEffect(() => {
    fetch(
      `http://localhost:3001/api/notes/v1/search/query?title=${input.title}&content=${input.content}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setNote(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [input]);
  const deleteNote = (id) => {
    fetch("http://localhost:3001/api/notes/v1/delete/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: true }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNote(note.filter((n) => n._id !== data.updateNote._id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...input, [name]: value });
    console.log(input);
  };
  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        {note.length > 0 && <SearchForm onChange={onChange} />}
      </Grid>
      {note
        ? note.map((card) => (
            <ListItem key={card._id} card={card} deleteNote={deleteNote} />
          ))
        : "loading..."}
    </Grid>
  );
};

export default CardGrid;
