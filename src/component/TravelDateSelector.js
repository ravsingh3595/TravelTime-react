import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function TravelDateSelector(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <Typography style={{marginRight: "20px"}}> Select Journey Date</Typography>
      <TextField
        id="date"
        label="From"
        type="date"
        defaultValue="2019-08-20"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        onChange={event => {
          props.setFromDate(event.target.value);
        }}
      />
      <TextField
        id="date"
        label="To"
        type="date"
        defaultValue="2019-08-20"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        onChange={event => {
          props.setToDate(event.target.value);
        }}
      />
    </form>
  );
}
