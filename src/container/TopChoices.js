import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../component/Button';
// import ButtonBase from '@material-ui/core/ButtonBase';
import LayoutBody from '../component/LayoutBody';
import Typography from '../component/Typography';
import DummyData from '../dummyData';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    margin: theme.spacing.unit * 8,
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    margin: '10px',
    borderRadius: 0,
    height: '150px',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    fontSize: 16,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});




function TopChoices(props) {
  const { classes } = props;

  // function onClick(event){
  //   // event.preventDefault();
  //   console.log("Clicked " + event.title);
    
  // }
  

  return (
    <LayoutBody className={classes.root} component="section" width="xlarge" >
      <Typography variant="h2" align="center" component="h6" style={{color: "#5ba16f"}}>
            Popular Cities
      </Typography>
      <Typography variant="h5" align="center" component="h3" style={{color: "#5ba16f", marginTop: "20px",}}>
            Find your next destination of travel in canada
      </Typography>
      <Divider variant="fullWidth"/>
      <div className={classes.images}>
        {DummyData.map(image => (
          <Button
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            // onClick={() => onClick(image)}
            component={linkProps => (
              <Link {...linkProps} href="/itinerary" variant="button" />
            )}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
            
          </Button>
        ))}
      </div>
    </LayoutBody>
  );
}

TopChoices.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopChoices);
