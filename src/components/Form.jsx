import { Box, TextField, Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#ff944d",
  },
  input: {
    color: "#0033cc",
    marginRight: 15,
  },
  button: {
    width: 150,
    height: 45,
    background: "#600080",
    color: "#d966ff",
  },
});
const Form = () => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      <TextField
        inputProps={{ className: classes.input }}
        label="City"
        className={classes.input}
      />
      <TextField
        label="Country"
        inputProps={{ className: classes.input }}
        className={classes.input}
      />
      <Button variant="contained" className={classes.button}>
        Get Weather{" "}
      </Button>
    </Box>
  );
};

export default Form;
