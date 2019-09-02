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
import MapContainer from '../component/MapContainer';
import SingleLineGridList from '../component/Gallery';
import "./Values.css";

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
        backgroundColor: '#73C58B',
        // backgroundColor: "#5BA16F",
        marginTop: theme.spacing.unit * 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // padding: '20px 10px 10px 10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        width: '75%',
        [theme.breakpoints.down('sm')]:{
            width: '60%',
        },
    },
    title: {
        
        margin: '80px 120px 8px 120px',
        color: "#ffffff",
        fontSize: 68,
        [theme.breakpoints.down('md')]:{
            margin: '50px 100px 5px 100px',
            fontSize: 48
        },
        [theme.breakpoints.down('sm')]:{
            margin: '30px 80px 3px 80px',
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
        width: '75%',
        color: '#fff',
        boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 'none',

        },
        
    },
    tripImage: {
        width: '50%',
        height: '400px',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]:{
            width: '80%',
            flex: '1 100%',
            justifyContent: 'center',
        },
        // borderRadius: '10px',
    },

    tripInfo: {
        backgroundColor: '#73C58B',
        overflow: 'hidden',
        width: '50%',
        height: '400px',
        [theme.breakpoints.down('sm')]:{
            width: '80%',
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
        padding: '1em 2.5em 2.5em 2.5em',
        [theme.breakpoints.down('md')]:{
            padding: '2.0em 1.5em 1.5em 1.5em',
            fontSize: 14
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
            padding: '1em 0em 0.5em 0.5em',
            fontSize: 14
        },
    },
    icon:{
        flex: 1, 
        [theme.breakpoints.down('sm')]:{
            size: 20,
        }
    }, 
    feature:{
        flex: 4
    },
    map1:{
        div:{
            position: 'relative',
        }
    },
    itemHeading:{
        margin: '80px 200px 0px 200px',
        color: "#ffffff",
        fontSize: 46,
        [theme.breakpoints.down('md')]:{
            margin: '50px 100px 0px 100px',
            fontSize: 36
        },
        [theme.breakpoints.down('sm')]:{
            margin: '30px 70px 0px 70px',
            fontSize: 32
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
      const filterData = itineraryData.filter(d=>d["tripID"] == this.props.tripID)

      
      
      console.log("Sizee", window.innerHeight , window.innerWidth)


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
                    {filterData[0].dayWise.map(dayWiseData => (
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
                        <Typography variant="h3" className={classes.itemHeading}>
                            Actual user experience
                        </Typography>
                        <Typography variant="h6" style={{color: "#fff"}}>
                            Scroll right for priview
                        </Typography>
                        
                    <div style={{overflow: "hidden !Important"}}>
                        <div style={{padding: '10px 20px 10px 20px', overflow:'hidden',}}>
                            <SingleLineGridList/>
                        </div>
                    </div>
                </section>
                <section className={classes.item}>
                        <Typography variant="h5" className={classes.itemHeading}>
                            Check destination on Map
                        </Typography>
                    <div className="mapContainer">
                        {/* <MapContainer />     */}
                    </div> 
                </section>
                {/* <section className={classes.item}>Reviews/blog</section>
                <section className={classes.item}>customization</section> */}
                
            </LayoutBody>
            </section>
          </div>
        );
    }
}

export default withStyles(styles)(ItineraryDescription);



