import React from 'react';
import Proptypes from 'prop-types';
import AppBar from '../container/AppAppBar.js';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../component/Typography';
import LayoutBody from '../component/LayoutBody';
import SearchCard from '../component/searchcard';
import Footer from '../container/Footer';
import {searchData} from '../dummyData';

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
        {searchData.map(data => (
            <SearchCard 
              tripImage={data.tripImage} 
              tripName={data.tripName} 
              tripHighlight={data.tripHighLight}
              />
          ))}
        
        
      </LayoutBody>
      <Footer/>

    </React.Fragment>
    );
  }
}

// SearchPage.prototype = {
//   tripName: Proptypes.string.isRequired,
//   tripHighlight: Proptypes.string.isRequired,
//   tripImage: Proptypes.string.isRequired,
// }

export default withStyles(styles)(SearchPage);
