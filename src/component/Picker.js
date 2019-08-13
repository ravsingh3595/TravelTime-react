import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { setUpNumberOfTravellers } from "../Actions/BookingActions";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    width: "45%",
    minWidth: 120
  }
}));

function Picker(props) {
  const classes = useStyles();
  const [travellers, setTravellers] = React.useState("");
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setTravellers(event.target.value);
    props.setUpNumberOfTravellers(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  function contactUs() {}
  return (
    <form autoComplete="off">
      {/* <Button className={classes.button} onClick={handleOpen}>
        Enter Number of travellers
      </Button> */}
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">
          Number of travellers
        </InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={travellers}
          onChange={handleChange}
          inputProps={{
            name: "age",
            id: "demo-controlled-open-select"
          }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem
            component={linkProps => (
              <Link {...linkProps} href="/" variant="button" />
            )}
            onClick={contactUs}
            value=""
          >
            <em>Other</em>
          </MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    numOfTravellers: state.bookingInfo.numOfTravellers
  };
}
export default connect(
  mapStateToProps,
  { setUpNumberOfTravellers }
)(Picker);
