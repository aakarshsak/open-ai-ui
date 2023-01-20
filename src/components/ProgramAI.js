import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Configuration, OpenAIApi } from "openai";

const ProgramAI = () => {
  const [codeText, setCodeText] = useState("");
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
    let newText = codeText + "\n\nHere's what the above class is doing\n:1.";
    newText = newText.replace(/\n/g, "\\n");

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: newText,
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });
    console.log(response);
    console.log(response.data.choices[0].text);
    setResultText(response.data.choices[0].text.replace(/\\n/g, "\n"));
    console.log(resultText);
  };
  return (
    <>
      <Container>
        <Typography component="div" variant="h4">
          Find Time Complexity of a Function
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline={true}
              rows={15}
              size="medium"
              onChange={(e) => setCodeText(e.target.value)}
            />
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
    </>
  );
};

export default ProgramAI;
