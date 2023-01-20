import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Grid, Card, Typography, CardMedia, CardContent } from "@mui/material";

const NavigationCard = (props) => {
  const { route, icon, header, subHeader } = props;

  return (
    <Grid item md={6} xs={12}>
      <Link to={route} className="link">
        <Card className="card" sx={{ display: "flex", borderRadius: 2 }}>
          <CardMedia
            component="img"
            image={icon}
            alt={header}
            sx={{ width: 100 }}
          />
          <CardContent sx={{ flex: "1 0 auto", backgroundColor: "#eeeeee" }}>
            <Typography component="div" variant="h5" sx={{ letterSpacing: 2 }}>
              {header}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {subHeader}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default NavigationCard;
