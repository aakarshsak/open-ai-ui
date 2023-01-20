import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { Grid, Typography, TextField, Button, MenuItem } from "@mui/material";
import { Configuration, OpenAIApi } from "openai";

const TranslateAI = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);
  const [openai, setOpenai] = useState();
  const [language, setLanguage] = useState("");

  const languages = [
    "Spanish",
    "Japanese",
    "Russian",
    "Hindi",
    "French",
    "Tamil",
  ];

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
    const newText = "Translate this into " + language + " :\n\n" + text;
    console.log(newText, language);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: newText,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(response);
    console.log(response.data.choices[0].text.split(/\d./));
    setResult(response.data.choices[0].text.split(/\d./));
  };

  return (
    <Container>
      <Typography component="div" variant="h4">
        Translate Your Text
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}></Grid>
        <Grid item xs={8}>
          <TextField fullWidth onChange={(e) => setText(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <TextField
            select
            label="Select"
            defaultValue="Hindi"
            helperText="Please select your language"
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((item, index) => {
              return (
                <MenuItem key={index + 1} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={generateResponse}>
            Correct Grammer
          </Button>
        </Grid>
        <Grid item xs={12}>
          {result.length > 0 && (
            <>
              {result.map((e, index) => (
                <Typography
                  key={index}
                  component="div"
                  variant="h4"
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

export default TranslateAI;
