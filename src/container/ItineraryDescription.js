import React,{Component} from 'react';
import classnames from 'classnames';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import LayoutBody from '../component/LayoutBody';
// import Button from '../component/Button';
import Typography from '../component/Typography';
import Divider from '@material-ui/core/Divider';
import { itineraryData } from '../dummyData';
import { MdLocationOn, MdShoppingCart } from "react-icons/md";
import { FaUtensils, FaHiking } from "react-icons/fa";
// import SingleLineGridList from '../component/Gallery';


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
        backgroundColor: "#5BA16F",
        
    },
    item: {
        marginTop: theme.spacing.unit * 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 10px 10px 10px',
    //   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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
        width: '80%',
        color: '#fff',
        boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        
    },
    tripImage: {
        width: '50%',
        height: '400px',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]:{
            width: '60%',
            flex: '1 100%',
        },
        // borderRadius: '10px',
    },

    tripInfo: {
        backgroundColor: '#73C58B',
        overflow: 'hidden',
        width: '50%',
        height: '400px',
        [theme.breakpoints.down('sm')]:{
            width: '60%',
            flex: '1 100%',
        },
        // borderRadius: '10px',
    },
    left: {
        display: 'block',
        float: 'left',
        position: 'relative',
        [theme.breakpoints.down('sm')]:{
            clear: 'both',
        },
    },
    right: {
        display: 'block',
        float: 'right',
        position: 'relative',
        [theme.breakpoints.down('sm')]:{
            clear: 'both',
        },
    },
    infoBlock:{
        padding: '3em 2.5em 2.5em 2.5em',
        [theme.breakpoints.down('md')]:{
            padding: '2.0em 1.5em 1.5em 1.5em',
        },
    },
    ul:{
        display: 'inline-flex',
        width: '100%',
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]:{
            padding: '1.5em 0.5em 1.5em 0.5em',
        }

    },
    li:{
        // border: '1px solid #ffffff',
        display: 'inline-flex',
        float: 'left',
        width: '50%',
        minWidth: '45%',
        position: 'relative',
        padding: '1em 1em 1em 2em',
        [theme.breakpoints.down('md')]:{
            padding: '0.5em 0em 0.5em 0.5em',
        }
    },
    icon:{
        flex: 1, 
    }, 
    feature:{
        flex: 4
    },
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
                                <img src={dayWiseData.image} alt={dayWiseData.destination} style={{height:"100%"}}/>
                            </div>
                            <div className={classnames(classes.tripInfo, dayWiseData.flow === "left: " ? classes.left : classes.right)}>
                                <div className={classes.infoBlock}>
                                    <h2>{dayWiseData.destination}</h2>
                                    <p>{dayWiseData.description}</p>
                                    <ul className={classes.ul}>
                                        <li className={classes.li}>
                                            <div className={classes.icon}>
                                                <MdLocationOn size={30}/>  
                                            </div>
                                            <div className={classes.feature}>
                                                <h4 style={{margin: 0, paddingBottom: 10}}>
                                                    Tourist Attraction:
                                                </h4>
                                                
                                                    {dayWiseData.touristAttraction}
                                            </div>
                                        </li>
                                        <li className={classes.li}>
                                            <div className={classes.icon}>
                                                <MdShoppingCart size={30}/> 
                                            </div>
                                            <div className={classes.feature}>
                                                <h4 style={{margin: 0, paddingBottom: 10}}>
                                                    Best Thing to Visit:
                                                </h4>
                                                    {dayWiseData.bestThing}
                                            </div>
                                        </li>
                                    </ul>
                                    <Divider/>
                                    <ul className={classes.ul}>
                                        <li className={classes.li}>
                                            <div className={classes.icon}>
                                                <FaUtensils size={30}/>  
                                            </div>
                                            <div className={classes.feature}>
                                                <h4 style={{margin: 0, paddingBottom: 10}}>
                                                    Food Speciality:
                                                </h4>
                                                {dayWiseData.foodSpeciality}
                                            </div>
                                        </li>
                                        <li className={classes.li}>
                                            <div className={classes.icon}>
                                                <FaHiking size={30}/>
                                            </div>
                                            <div className={classes.feature}>
                                                <h4 style={{margin: 0, paddingBottom: 10}}>
                                                    Best Activity:
                                                </h4>
                                                {dayWiseData.activity}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <section className={classes.item}>
                    {/* <SingleLineGridList/> */}
                </section>
                {/* <section className={classes.item}>Reviews/blog</section>
                <section className={classes.item}>customization</section> */}
                <section className={classes.item}>Route on map</section>
            </LayoutBody>
            </section>
          </div>
        );
    }
}

export default withStyles(styles)(ItineraryDescription);



