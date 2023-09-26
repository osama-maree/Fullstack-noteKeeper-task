import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActions, CardHeader } from "@mui/material";

const cardData = [
  { title: "Card 1", content: "Content for Card 1" },
  { title: "Card 2", content: "Content for Card 2" },
  { title: "Card 3", content: "Content for Card 3" },
  { title: "Card 1", content: "Content for Card 1" },
  { title: "Card 2", content: "Content for Card 2" },
  {
    title: "Card 3",
    content: "oaM maas msadS",
  },
  // Add more card data as needed
];

const CardGrid = () => {
  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            style={{
              minHeight: "200px",
              maxWidth: "100%",
              position: "relative",
            }}
          >
            <CardContent>
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
            <CardActions
              sx={{ position: "absolute", bottom: "0px", right: "10px" }}
            >
              <Typography variant="body2" color="#78909c">
                osmaa
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
