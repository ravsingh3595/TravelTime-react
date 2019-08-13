import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssLabel: {
    "&$cssFocused": {
      color: "#fff"
    }
  },
  cssFocused: {},
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#fff"
    }
  },
  notchedOutline: {},
  textField: {
    width: "350px",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

function TextFieldComponent(props) {
  const {
    classes,
    id,
    name,
    label,
    type,
    autoComplete,
    onChange,
    onBlur
  } = props;

  return (
    <TextField
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused
        }
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline
        }
      }}
      id={id}
      name={name}
      label={label}
      type={type}
      autoComplete={autoComplete}
      margin="normal"
      variant="outlined"
      className={classes.textField}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
TextFieldComponent.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.string
};

export default withStyles(styles)(TextFieldComponent);
