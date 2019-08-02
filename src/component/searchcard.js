import React from 'react';
import Proptypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../component/Typography';
import { ButtonGroup } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  box:{
    paddingLeft: '100px'
    // clear: 'left',
    // display: 'relative',
    // justifyContent: 'center',
    // flexDirection: 'column',
    
  },
  container:{
    margin: '10px',
    float: 'left',
    width: '25%',
    border: '2px solid #5BA16F',
    padding: '10px',
  },
  button:{

  },

});


class searchCard extends React.Component{
constructor(props){
    super(props);
    this.state = {
        
    }
    
}

render(){
  const { classes } = this.props;

  return(
    <React.Fragment>
        
      <div className={classes.box}>
        <div className={classes.container}>
          
          <img src = {this.props.tripImage} alt= "" height= "200px" width = "100%"/>
          <Typography variant="h5" align="center" component="h6" >
              {this.props.tripName}
          </Typography>
          <Typography variant="body1" align="center" >
              {this.props.tripHighlight}
          </Typography>
          <Grid item xs={12}>
            <ButtonGroup fullWidth aria-label="full width outlined button group">
              <Button className={classes.button} variant="contained" color="primary" 
                component={linkProps => (<Link {...linkProps} href="/itinerary" variant="button" /> )}
                > Explore </Button>
              <Button className={classes.button} variant="contained" color="primary" 
                component={linkProps => (<Link {...linkProps} href="/booking" variant="button" /> )}
              > Book now! </Button>
            </ButtonGroup>
          </Grid>
        </div>
      </div>

      
    </React.Fragment>
    );
  }
}

// searchCard.prototype = {
//     tripName: Proptypes.string.isRequired,
//     tripHighlights: Proptypes.string.isRequired,
//     tripImage: Proptypes.string.isRequired,
// }

export default withStyles(styles)(searchCard);
