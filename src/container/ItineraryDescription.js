import React,{Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from '../component/LayoutBody';
import Button from '../component/Button';
import Typography from '../component/Typography';
import Divider from '@material-ui/core/Divider';
import { itineraryData } from '../dummyData'



const styles = theme => ({
    root: {
      display: 'flex',
      backgroundImage: 'linear-gradient(to right, #5A3F37, #2C7744)',
      overflow: 'hidden',
      flexDirection: 'column',
      alignItems: 'center',
    },
    layoutBody: {
        overflow: 'hidden',
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 15,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "#76b852",
    //   [theme.breakpoints.down('md')]:{
    //     margin: '100px',
    // },
    //   alignContent: 'space-around',
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px 10px',
      
    //   border: '2px solid #ffffff'           //Should be removed at the end
    },
    title: {
        margin: '100px 250px 10px 250px',
        color: "#ffffff",
        fontSize: 68,
        [theme.breakpoints.down('md')]:{
            margin: '80px 120px 8px 120px',
            fontSize: 48
        },
        [theme.breakpoints.down('sm')]:{
            margin: '50px 100px 5px 100px',
            fontSize: 32
        },
    },
    divider:{
        border: "2px solid white", 
        width: "200px",
        [theme.breakpoints.down('sm')]:{
            border: "1px solid white", 
            width: "100px",
        },
    },
    subTitle: {
        color: "#ffffff",
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 15,   
        [theme.breakpoints.down('sm')]:{
            marginTop: theme.spacing.unit * 1,
            marginBottom: theme.spacing.unit * 5,  
            fontSize: 12
        },
    },
    day:{
        display: 'block',
        width: '90%',
    },
    tripImage: {
        // display: 'inline-block',
        // border: '2px solid #ffffff',
        // position: 'relative',
        width: '50%',
        height: '400px',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]:{
            height: '300px',
        },
        [theme.breakpoints.down('sm')]:{
            height: '250px',
        },
    },

    tripInfo: {
        // display: 'inline-block',
        // border: '2px solid #ffffff',
        backgroundColor: '#71B280',
        overflow: 'hidden',
        width: '50%',
        height: '400px',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]:{
            height: '300px',
        },
        [theme.breakpoints.down('sm')]:{
            height: '250px',
        },
    },
    left: {
        display: 'block',
        float: 'left',
        position: 'relative',
    },
    right: {
        display: 'block',
        float: 'right',
        position: 'relative',
    },
    infoBlock:{
        
        padding: '50px',
        [theme.breakpoints.down('md')]:{
            padding: '40px',
        },
        [theme.breakpoints.down('sm')]:{
            padding: '30px',
        },
    }

   
    
    
});

class ItineraryDescription extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
      const { classes } = this.props;
        return(
          <div>
            <section className={classes.root}>
            <LayoutBody className={classes.layoutBody} width="xlarge">
                <section className={classes.item}>
                    <Typography className={classes.title} variant="h1" marked="center">
                        TOUR <strong style={{fontWeight: 'bold'}}>ITINERARY</strong>
                    </Typography>
                        <div className={classes.divider}></div>   
                    <Typography className={classes.subTitle} variant="h5" marked="center" >
                        Highlights of the Journey!
                    </Typography>
                </section>

                <div className={classes.day}>
                    {itineraryData.dayWise.map(dayWiseData => (
                        <React.Fragment  key = {dayWiseData.destination}>
                            <div className= {classnames(classes.tripImage, dayWiseData.flow === "left" ? classes.left : classes.right)}>
                                <img src={dayWiseData.image}/>
                            </div>
                            <div className={classnames(classes.tripInfo, dayWiseData.flow === "left: " ? classes.left : classes.right)}>
                                <div className={classes.infoBlock}>
                                    <h5>{dayWiseData.destination}</h5>
                                    <p>{dayWiseData.description}</p>
                                    <ul>
                                        <li>
                                            touristAttraction: {dayWiseData.touristAttraction}
                                        </li>
                                        <li>
                                            bestThing: {dayWiseData.bestThing}
                                        </li>
                                        <li>
                                            foodSpeciality: {dayWiseData.foodSpeciality}
                                        </li>
                                        <li>
                                            activity: {dayWiseData.activity}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                {/* <div className={classes.day}>
                    
                    <div className={classes.tripInfo+" "+classes.left }>
                        <div className={classes.infoBlock}>

                            I'm the InfoI'm the InfoI'm the InfoI'm the Info
                            I'm the InfoI'm the InfoI'm the InfoI'm the Info
                            I'm the InfoI'm the InfoI'm the InfoI'm the Info
                            I'm the InfoI'm the InfoI'm the InfoI'm the Info
                            I'm the InfoI'm the Info
                        
                        </div>
                    </div>
                    <div className= {classes.tripImage+" "+classes.right }>
                        <img src={itineraryData.tripImage} />
                    </div>
                </div> */}
                <section className={classes.item}>photogalery</section>
                <section className={classes.item}>Reviews/blog</section>
                <section className={classes.item}>customization</section>
                <section className={classes.item}>Route on map</section>
                <div className={classes.item}>

                </div>

            </LayoutBody>
            </section>
          </div>
        );
    }
}

export default withStyles(styles)(ItineraryDescription);



