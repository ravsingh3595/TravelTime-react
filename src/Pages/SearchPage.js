import React from 'react';
import AppBar from '../container/AppAppBar.js';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../component/Typography';
import LayoutBody from '../component/LayoutBody';
import Footer from '../container/Footer';

const styles = theme => ({
  layoutBody: {
      backgroundColor: '#DBFFE5',
      overflow: 'hidden',
      
  },
  heading: {
      color: "#5BA16F", 
      marginTop: "30px",
      paddingBottom: 40,
      fontWeight: 'bold',
  },
});


class SearchPage extends React.Component{
constructor(props){
    super(props);
    this.state = {
        
    }
    
}

render(){
  const { classes } = this.props;
  return(
    <React.Fragment>
      <AppBar/>
      <LayoutBody className={classes.layoutBody} width="xlarge">
        <Typography variant="h3" align="center" component="h6" className={classes.heading}>
          Choose what suits you!
        </Typography>
      </LayoutBody>
      <Footer/>

    </React.Fragment>
    );
  }
}
export default withStyles(styles)(SearchPage);
