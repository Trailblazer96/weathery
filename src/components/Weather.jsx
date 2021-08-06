import { Box, makeStyles } from "@material-ui/core";
import logo from "../images/bg.jpg";
import Form from "./Form";

const useStyle = makeStyles({
  component: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    width: "65%",
    justifyContent: "center",
  },
  leftContainer: {
    backgroundImage: `url(${logo})`,
    height: "80%",
    width: "30%",
    backgroundSize: "cover",
    borderRadius: "20px 0 0 20px",
  },
  rightContainer: {
    background: "linear-gradient(#ff5c33, #4d004d)",
    height: "80%",
    width: "65%",
  },
});
const Weather = () => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      <Box className={classes.leftContainer}></Box>
      <Box className={classes.rightContainer}>
        <Form />
      </Box>
    </Box>
  );
};

export default Weather;
