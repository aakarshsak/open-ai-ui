import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { Grid, Typography, TextField, Button, MenuItem } from "@mui/material";
import { Configuration, OpenAIApi } from "openai";

const EmojiAI = () => {
  const [text, setText] = useState("");
  const [resultText, setResultText] = useState([]);
  const [openai, setOpenai] = useState();
  const [language, setLanguage] = useState("");

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
      "Convert movie titles into emoji. \n\nBack to the Future: 👨👴🚗🕒\nBatman: 🤵🦇\nTransformers: 🚗🤖 \n" +
      text +
      ":";
    console.log(newText, language);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: newText,
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });
    console.log(response);
    console.log(response.data.choices[0].text);
    setResultText(response.data.choices[0].text);
  };

  return (
    <Container>
      <Typography component="div" variant="h4">
        Create Emoji from Movie
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <TextField fullWidth onChange={(e) => setText(e.target.value)} />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" onClick={generateResponse}>
            Emojify
          </Button>
        </Grid>
        <Grid item xs={12}>
          {resultText.length > 0 && (
            <>
              <Typography component="div" variant="h4">
                {resultText}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmojiAI;
