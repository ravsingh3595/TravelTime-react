import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '20%',
    minWidth: 120,
  },
}));

export default function SortPicker() {
  const classes = useStyles();
  const [sort, setSort] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setSort(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }


  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Select Option</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sort}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value={1}>Distance- Far to Near</MenuItem>
          <MenuItem value={2}>Distance- Near to Far</MenuItem>
          <MenuItem value={3}>Cost- High to low</MenuItem>
          <MenuItem value={4}>Cost- Low to High</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}