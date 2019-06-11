import React from 'react';
import PropTypes from 'prop-types';
// import compose from 'recompose/compose';
// import pure from 'recompose/pure';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from '../component/LayoutBody';
import Typography from '../component/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgb(115, 197, 139)',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(115, 197, 139)',
    marginRight: theme.spacing.unit,
    '&:hover': {
      backgroundColor: 'rgb(115, 197, 139)',
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  language: {
    marginTop: theme.spacing.unit,
    width: 150,
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container spacing={40}>
          <Grid item xs={6} sm={4} md={2}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={16}
            >
              <Grid item className={classes.icons}>
                {/* <a href="/" className={classes.icon}>
                  <img src="/" alt="Facebook" />
                </a>
                <a href="" className={classes.icon}>
                  <img src="/" alt="Twitter" />
                </a> */}
              </Grid>
              <Grid item>© 2019 TravelTime</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/">Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/">Privacy</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </LayoutBody>
    </Typography>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default compose(
//   pure,
//   withStyles(styles),
// )(Footer);

export default withStyles(styles)(Footer);
