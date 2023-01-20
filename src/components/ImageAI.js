import { Container } from "@mui/system";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Configuration, OpenAIApi } from "openai";
import { useEffect, useState } from "react";
import image_default from "../static/assets/image-default.png";

const ImageAI = () => {
  const [searchText, setSearchText] = useState("");
  const [imgUrl, setImgUrl] = useState("");
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
    console.log(openai, searchText);

    const response = await openai.createImage({
      prompt: searchText,
      n: 1,
      size: "1024x1024",
    });
    console.log(response);
    // const data = {
    //   data: [
    //     {
    //       url: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    //     },
    //   ],
    // };
    // const response = {
    //   data: data,
    // };
    setImgUrl(response.data.data[0].url);
  };

  return (
    <Container>
      <Typography component="div" variant="h4">
        Generate Image using Open AI API
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          {<img src={imgUrl || image_default} alt="" width="50%" />}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={generateResponse}>
            Generate Image
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ImageAI;
