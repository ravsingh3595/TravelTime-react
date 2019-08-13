import React from 'react';
import Proptypes from 'prop-types';
import AppBar from '../container/AppAppBar.js';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../component/Typography';
import LayoutBody from '../component/LayoutBody';
import SearchCard from '../component/searchcard';
import Footer from '../container/Footer';
import {searchData} from '../dummyData';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Button, Grid } from '@material-ui/core';
import sortPicker from '../component/sortPicker'


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
  search: {
    position: 'relative',
    border: '2px solid #5BA16F',
    borderRadius: '10px',
    width: '50%',
    marginRight: '20px',
    marginLeft: 0,
    float: 'left',
    // backgroundColor: (theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },   
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50%',
    },
  },
  searchButton:{
    
  },
  searchCard:{
    clear: 'left',
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sorting:{
    clear: 'left',
    display: 'flex',
    padding: '30px 50px 50px 25px' 
  },
  sortHeading: {
    color: "#5BA16F", 
    fontWeight: 'bold',
  },
  gridContainer:{

  },
  gridItem:{

  }
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

        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.searchButton}>
            <Button variant="outlined">
              Search Destination
            </Button>
          </div>
          <div className={classes.sorting}>
            <Typography variant="h6" align="left" className={classes.sortHeading}>
              Sort your destination by: 
            </Typography>
            <sortPicker/>
          </div>

          <div className={classes.searchCard}>
            {searchData.map(data => (
              <SearchCard 
                tripImage={data.tripImage} 
                tripName={data.tripName} 
                tripHighlight={data.tripHighLight}
                />
            ))}
          </div>

          {/* <Grid container
                direction="column"
                justify="space-around"
                alignItems="center">
            <Grid item  >
              {searchData.map(data => (
                // <div className={classes.gridItem}>
                <Grid container item xs={12} spacing={3}>
                   <SearchCard 
                    tripImage={data.tripImage} 
                    tripName={data.tripName} 
                    tripHighlight={data.tripHighLight}
                    />
                </Grid>
                 
                // </div>
              ))}
            </Grid>
          </Grid> */}
          
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
