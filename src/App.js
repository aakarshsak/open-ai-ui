import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Grid, Card, Typography, CardMedia, CardContent } from "@mui/material";
import image_icon from "./static/assets/image-icon.png";
import function_icon from "./static/assets/function-icon.png";
import NavigationCard from "./components/NavigationCard";
import emoji_icon from "./static/assets/emoji-icon.png";
import recipe_icon from "./static/assets/recipe-icon.png";
import translate_icon from "./static/assets/translate-icon.png";
import program_icon from "./static/assets/program-icon.png";
import qa_icon from "./static/assets/qa-icon.png";
import grammer_icon from "./static/assets/grammer-icon.png";

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
      icon: qa_icon,
      header: "Question Answer AI",
      subHeader: "Answer questions based on existing knowledge",
    },
    {
      id: 4,
      route: "/code-ai",
      icon: program_icon,
      header: "Program AI",
      subHeader: "Explain a complicated piece of code.",
    },
    {
      id: 5,
      route: "/grammer-ai",
      icon: grammer_icon,
      header: "Grammer AI",
      subHeader: "Corrects sentences into standard English.",
    },
    {
      id: 6,
      route: "/translate-ai",
      icon: translate_icon,
      header: "Translate AI",
      subHeader: "Translates English text into French, Spanish and Japanese.",
    },
    {
      id: 7,
      route: "/emoji-ai",
      icon: emoji_icon,
      header: "Emoji AI",
      subHeader: "Convert movie titles into emoji.",
    },
    {
      id: 8,
      route: "/recipe-ai",
      icon: recipe_icon,
      header: "Recipe AI",
      subHeader: "Create a recipe from a list of ingredients.",
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
