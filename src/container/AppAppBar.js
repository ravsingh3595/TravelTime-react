import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../component/AppBar';
import Toolbar, { styles as toolbarStyles } from '../component/Toolbar';
import LoginPage from '../Pages/Login';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../Pages/SignupPage';

const styles = theme => ({
  title: {
    fontSize: 28,
  },
  // placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit * 3,
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="relative" style={{backgroundColor: "#5ba16f" }}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
          >
            {'TraveTime'}
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/login">
              {'SIGN IN'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classNames(classes.rightLink)}
              href="/signup">
              {'SIGN UP'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/login" exact component = {LoginPage}/> 
        <Route path="/signup" exact component = {SignupPage}/> 
      </Switch>
    </div>
    
  );
  
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);