import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const cardData = [
  { title: "Card 1", content: "Content for Card 1" },
  { title: "Card 2", content: "Content for Card 2" },
  { title: "Card 3", content: "Content for Card 3" },
  { title: "Card 1", content: "Content for Card 1" },
  { title: "Card 2", content: "Content for Card 2" },
  {
    title: "Card 3",
    content:
      "Content sss sssssss  sssssssas asa saas asa asasaas assaas saas sasaa sasa  ass asa saas sa saas ssssss ssssssssss  sssss sssssss sssssssss ssssss ssssssss sssssssssss sssss ssssss ssssssss sssss sssss ssssssss sssss sssss sssssfor Card 3",
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
              minHeight: "150px",
              maxHeight: "150px",
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
                sx={{ color: "#78909c" }}
              >
                {card.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
