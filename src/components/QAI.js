import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Configuration, OpenAIApi } from "openai";

const QAI = () => {
  const [quesText, setQuesText] = useState("");
  const [resultText, setResultText] = useState("");
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
      'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: ' +
      quesText +
      "?\nA:";
    console.log(newText);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: newText,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
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
        Find Time Complexity of a Function
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <TextField fullWidth onChange={(e) => setQuesText(e.target.value)} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={generateResponse}>
            Calculate Time Complexity
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

export default QAI;
