import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import TransitionsModal from "./EditModal.jsx";
import EditIcon from "@mui/icons-material/Edit";
const ListItem = ({ card, deleteNote, setNote }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        style={{
          minHeight: "200px",
          maxWidth: "100%",
          position: "relative",
        }}
      >
        <CardContent>
          <CloseIcon
            sx={{
              position: "absolute",
              top: "5px",
              right: "10px",
              color: "#78909c",
              cursor: "pointer",
            }}
            onClick={() => deleteNote(card._id)}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #1de9b6",
            }}
          >
            {card.title}
            <EditIcon
              onClick={handleOpen}
              sx={{
                marginLeft: ".5rem",
                cursor: "pointer",
                border: "1px solid #000",
                borderRadius: "50%",
                padding: "2px",
              }}
              fontSize="small"
            />
          </Typography>
          <Typography
            variant="body2"
            textAlign={"start"}
            sx={{
              color: "#78909c",
            }}
          >
            {card.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography
            variant="body2"
            color="#78909c"
            sx={{ position: "absolute", bottom: "5px", right: "10px" }}
          >
            {format(new Date(card.createdAt), "dd MMM, yyyy hh:mm a")}
          </Typography>
          <TransitionsModal
            handleClose={handleClose}
            open={open}
            card={card}
            setNote={setNote}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ListItem;
