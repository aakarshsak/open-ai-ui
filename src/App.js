import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Grid, Card, Typography, CardMedia, CardContent } from "@mui/material";
import image_icon from "./static/assets/image-icon.png";
import function_icon from "./static/assets/function-icon.png";
import NavigationCard from "./components/NavigationCard";

const App = () => {
  const navigationList = [
    {
      id: 1,
      route: "/image-ai",
      icon: image_icon,
      header: "Image AI",
      subHeader: "Generate an image from a text",
    },
    {
      id: 2,
      route: "/function-ai",
      icon: function_icon,
      header: "Function AI",
      subHeader: "Find the time complexity of a function.",
    },
    {
      id: 3,
      route: "/qa-ai",
      icon: function_icon,
      header: "Question Answer AI",
      subHeader: "Answer questions based on existing knowledge",
    },
  ];

  const renderList = navigationList.map((item) => {
    return <NavigationCard key={item.id} {...item} />;
  });

  return (
    <Container>
      <Typography
        component="div"
        variant="h3"
        sx={{ letterSpacing: 1, marginBottom: 3 }}
      >
        Open AI UI
      </Typography>

      <Grid container spacing={2}>
        {renderList}
      </Grid>
    </Container>
  );
};

export default App;
