import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../component/AppBar';
import Toolbar from '../component/Toolbar';

const styles = theme => ({
  title: {
    fontSize: 28,
  },
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

class AppBarLogin extends React.Component{

  openProfile(){

  }
    
    render(){
        const { classes } = this.props;
        return(
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
                    {'TravelTime'}
                </Link>
                
                <div className={classes.right}>
                  <Link
                    variant="h6"
                    underline="none"
                    className={classNames(classes.rightLink)}
                    href="/profile"
                    >
                    {'PROFILE'}
                  </Link>
                  <Link
                    variant="h6"
                    underline="none"
                    className={classNames(classes.rightLink)}
                    href="/"
                    onClick={this.props.triggerParentUpdate}>
                    {'LOGOUT'}
                  </Link>
                </div>
                </Toolbar>
            </AppBar>
            </div>
        )
    }
}


AppBarLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarLogin);
