import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { Grid, Typography, TextField, Button, MenuItem } from "@mui/material";
import { Configuration, OpenAIApi } from "openai";

const RecipeAI = () => {
  const [text, setText] = useState("");
  const [item, setItem] = useState("");
  const [result, setResult] = useState([]);
  const [openai, setOpenai] = useState();

  useEffect(() => {
    setOpenai(configure());
  }, []);

  const configure = () => {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPEN_API_SECRET_KEY,
    });

    const openai = new OpenAIApi(configuration);

    return openai;
  };

  const generateResponse = async () => {
    const newText =
      "Write a recipe based on these ingredients and instructions:\n\n" +
      item +
      "\n\nIngredients:\n" +
      text +
      "\n\nInstructions:";

    console.log(newText);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: newText,
      temperature: 0.3,
      max_tokens: 120,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(response);
    console.log(response.data.choices[0].text.split(/\d./));
    setResult(response.data.choices[0].text.split(/\n/));
  };

  return (
    <Container>
      <Typography component="div" variant="h4">
        Create Recipe From Ingredients
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="medium"
            onChange={(e) => setItem(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline={true}
            rows={10}
            size="medium"
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" onClick={generateResponse}>
            Create Recipe
          </Button>
        </Grid>
        <Grid item xs={12}>
          {result.length > 0 && (
            <>
              {result.map((e, index) => (
                <Typography
                  key={index}
                  component="div"
                  variant="h5"
                  sx={{ marginBottom: 2 }}
                >
                  {e}
                </Typography>
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecipeAI;
