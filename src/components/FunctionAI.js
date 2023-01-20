import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Configuration, OpenAIApi } from "openai";

const FunctionAI = () => {
  const [functionText, setFunctionText] = useState("");
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
    let newText = functionText + "\n\nThe time complexity of this function is";
    newText = newText.replace(/\n/g, "\\n");
    setFunctionText(newText);
    console.log(newText);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: functionText,
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });
    console.log(response);
    console.log(response.data.choices[0].text);
    setResultText(response.data.choices[0].text);
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
              onChange={(e) => setFunctionText(e.target.value)}
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
                  Time Complexity : {resultText.split(".")[0]}
                </Typography>

                <Typography
                  variant="subtitle"
                  color="text.primary"
                  component="div"
                  sx={{ marginTop: 4 }}
                >
                  {resultText.split(".")[1]}
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FunctionAI;
