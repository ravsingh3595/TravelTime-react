import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from '../component/LayoutBody';
// import Button from '../components/Button';
import Typography from '../component/Typography';
import { GoMailRead, GoTag, GoMegaphone  } from "react-icons/go";
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    display: 'flex',
    // backgroundColor: "#5ba16f",
    backgroundColor: "#dbffe5",
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    margin: '10px',
    backgroundColor:  'rgb(115, 197, 139)',
    borderRadius: '25px', 
  },
  number: {
    fontSize: 24,
    padding: '1.5em',
    fontFamily: theme.typography.fontFamily,
    color: "#fff",
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor:  'rgb(115, 197, 139)',
  },
//   button: {
//     marginTop: theme.spacing.unit * 8,
//   },
});

function steps(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Typography variant="h3" align="center" component="h6" style={{color: "#5ba16f", margin: "0px 10px 50px 10px"}}>
          How it works
        </Typography>
        {/* <Divider variant="fullWidth"/> */}
        <div >
          <Grid container spacing={40} >
            <Grid item xs={12} md={4} >
              <div className={classes.item}>
                {/* <div className={classes.number}>1.</div> */}
                <GoMailRead size={30} style={{padding: '20px 0px 20px 0px', color: '#fff'}}/>
                <Typography variant="h5" align="center" style={{padding: '20px', color: '#fff'}}>
                  Appointment every Wednesday 9am.
                  {'New offers every week. New experiences,  new surprises and oppourtunies.'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                {/* <div className={classes.number}>2.</div> */}
                <GoTag size={30} style={{padding: '20px 0px 20px 0px', color: '#fff'}}/>
                <Typography variant="h5" align="center" style={{padding: '20px', color: '#fff'}}>
                  First come, first served. Our offers are in limited quantities.
                  {'Our offers are in limited quantities,'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                {/* <div className={classes.number}>3.</div> */}
                <GoMegaphone size={30} style={{padding: '20px 0px 20px 0px', color: '#fff'}}/>
                <Typography variant="h5" align="center" style={{padding: '20px', color: '#fff'}}>
                  {'New offers every week. New experiences, new surprises. '}
                  {'Your Sundays will no longer be alike.'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} href="/premium-themes/onepirate/sign-up" variant="button" />
          )}
        >
          Get started
        </Button> */}
      </LayoutBody>
    </section>
  );
}

steps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(steps);
