import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Image from '../assest/algonquin.jpg';
import Typography from '../component/Typography';
import Button from '../component/Button';
import Link from '@material-ui/core/Link';
import {itineraryData} from '../dummyData';
import { MdToday } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";


const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: "#fff",
      overflow: 'hidden',
      color: "#5BA16F",
    },
    imageWithButton:{
      position: 'relative',
      width: '100%',
      height: '350px',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]:{
        height: 'auto',
      }
    },
    img :{
      width: '100%',
      imageRendering: 'crisp-edges',
  },
    button: {
      position: 'absolute',
      top: "70%",
      left: "80%",
      width: "180px",
      fontSize: 16,
      backgroundColor: "#73C58B",
      borderRadius: "80%",
      [theme.breakpoints.down('sm')]:{
        width: "120px",
        fontSize: 10,
      }
    },
    descriptionContainer:{
      overflow: 'hidden',
      padding: '70px 50px 50px 50px',
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'flex-start',
      [theme.breakpoints.down('sm')]:{
        flexDirection: 'column',
      },
    },
    tripName:{
      flex: 1,
    },
    tripDescription:{
      flex: 4,
      padding: '20px 10px 10px 30px',
      [theme.breakpoints.down('md')]:{
        flex: 2,
      },
    },
    divider:{
      marginTop: 10,
      marginLeft: 50,
      border: "2px solid #5BA16F", 
      width: "200px",
      [theme.breakpoints.down('sm')]:{
          border: "1px solid white", 
          width: "100px",
      },
    },
    weatherContainer:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px 200px',
      [theme.breakpoints.down('sm')]:{
        padding: '40px 100px'
    },
      [theme.breakpoints.down('sm')]:{
        padding: '30px 50px'
    },
    },
    numberOfDays:{
      flex: 1,

    },
    weather:{
      flex: 1,
            
    }

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
        const filterData = itineraryData.filter(d=>d["tripID"] == this.props.tripID )
        console.log(filterData)
        return(
            <div>
              <section className={classes.root}>
                <div className={classes.imageWithButton}>
                 
                  <img className={classes.img} src={filterData[0].tripImage} alt="Logo" />
                  <Button className={classes.button} variant="contained" color="primary" 
                  component={linkProps => (<Link {...linkProps} href="/booking" variant="button" /> )}
                  > Book Now </Button>
                </div>
                <div className={classes.descriptionContainer}>
                  <div className={classes.tripName}>
                    <Typography style={{ color: "#5BA16F", padding: '5px 20px 5px 5px'}} variant="h1" marked="center">
                        <strong >{filterData[0].tripName}</strong>
                    </Typography>
                  <div className={classes.divider}></div>
                    <Typography  style={{ color: "#5BA16F", padding: '20px 0px 0px 20px', marginLeft: 20,}} variant="h4" component="h2">
                      {filterData[0].tripHighLight}
                    </Typography>
                  </div>
                  <div className={classes.tripDescription}>
                    <Typography  style={{ color: "#5BA16F"}} variant="subtitle2" component="h2">
                      {filterData[0].tripDescription}
                    </Typography>
                  </div>
                </div>
                <Divider/>
                <div className={classes.weatherContainer}>
                  <div className={classes.numberOfDays}>
                    <MdToday size={60} style={{ paddingLeft: 100}}/> 
                    <Typography  style={{ color: "#5BA16F",}} variant="h5" component="h2">
                       Trip Duration: <strong>{filterData[0].numberOfDays} Days</strong>
                    </Typography>
                  </div>
                  <div className={classes.weather}>
                    <TiWeatherPartlySunny size={60} style={{ paddingLeft: 100}}/>
                    <Typography  style={{ color: "#5BA16F",}} variant="h5" component="h2">
                    Wheather: <strong>{filterData[0].weatherMin}<sup>℉</sup> to {filterData[0].weatherMax}<sup>℉</sup></strong>
                    </Typography>
                  </div>
                </div>
                
              </section>
            </div>
        );
    }
}

ItineraryHeader.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ItineraryHeader);
