import React from 'react';
import Proptypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../component/Typography';
import { ButtonGroup } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { relative } from 'path';

const styles = theme => ({
  box:{
    display: 'relative',
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
              <Button>Explore</Button>
              <Button>Book Now!</Button>
              
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
