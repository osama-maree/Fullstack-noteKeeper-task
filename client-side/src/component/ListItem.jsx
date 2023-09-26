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

const ListItem = ({ card, deleteNote }) => {
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
              color: "#1de9b6 ",
              textDecoration: "underline",
            }}
          >
            {card.title}
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
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ListItem;
