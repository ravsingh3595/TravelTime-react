import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Image from '../assest/algonquin.jpg';
// import Button from '@material-ui/core/Button';
import LayoutBody from '../component/LayoutBody';
import Button from '../component/Button';
import Link from '@material-ui/core/Link';
// import Typography from '../component/Typography';
import {itineraryData} from '../dummyData';

const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: "#EFF1F6",
      overflow: 'hidden',
    },
    imageWithButton:{
      position: 'relative',
      width: '100%',
      height: '350px',
      overflow: 'hidden',
    },
    img :{
      width: '100%',
      imageRendering: 'crisp-edges',
  },
    button: {
      position: 'absolute',
      top: "80%",
      left: "80%",
      width: "200px",
      // color: "#fff"
    },
    layoutBody: {
      flex: '1 100%',
      backgroundColor: "#fffa61",
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 15,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: `0px ${theme.spacing.unit * 5}px`,
    },
    
    
  //   container :{
  //     position: 'relative',
  //     width: '100%',
  //   },
  
  // btn :{
  //     position: 'absolute',
  //     top: "80%",
  //     left: "80%",
  //     width: "200px"
  // }
  
});

class ItineraryHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
          image : Image
        }
    }
    render(){
        const { classes } = this.props;
        return(
          // <React.Fragment>
          //   <div className={classes.container}>
          //       <img className={classes.img} src={itineraryData.tripImage} alt="Logo" />
          //       <Button className={classes.btn} variant="contained" color="primary" > Book Now </Button>
          //   </div>
          //   <ul className="flex-container">
          //           <li class="flex-item placeName">
          //               <h1>{itineraryData.tripName}</h1>
          //               <Divider />
          //               <h3>{itineraryData.tripHighLight}</h3>
          //               <p>Number of Days: {itineraryData.numberOfDays}</p>
          //           </li>
          //           <li class="flex-item description "><h3>{itineraryData.tripDescription}</h3></li>
          //       </ul>
          // </React.Fragment>


            <div>
              <section className={classes.root}>
                <div className={classes.imageWithButton}>
                  <img className={classes.img} src={itineraryData.tripImage} alt="Logo" />
                  <Button className={classes.button} variant="contained" color="primary" > Book Now </Button>
                </div>
  
                    {/* <Button
                      color="primary"
                      size="large"
                      variant="contained"
                      className={classes.button}
                      // component={linkProps => (
                        // <Link {...linkProps} href="/booking" variant="button" />
                      // )}
                    >
                     
                      Get started
                    </Button>  */}
                <LayoutBody className={classes.layoutBody} width="xlarge" height="500px">
                  
                  
                </LayoutBody>
              </section>
            </div>
        );
    }
}

ItineraryHeader.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ItineraryHeader);
