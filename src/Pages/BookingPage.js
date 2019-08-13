import React from 'react';
import LayoutBody from '../component/LayoutBody';
import AppBar from '../container/AppAppBar';
import AppBarLogin from '../container/AppBarLogin';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../component/Typography';
import HorizontalLinearStepper from '../component/Stepper';
import shortid from 'shortid';
// import DateTimePicker from 'react-datetime-picker';

import fire from '../Firebase/Firebase';

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

const database = fire.database();
const ref = database.ref('booking');


class BookingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isUserLoggedIn : true,
            // bookingId: shortid.generate(),
            // date: new Date(),
            // destinationID: shortid.generate(),
            // userId: shortid.generate(),
        }
        
    }

    componentWillMount(){
        // this.setState({bookingId: shortid.generate()})
        // this.setState({destinationID: shortid.generate()})
        // this.setState({userId: shortid.generate()})
        console.log(shortid.generate())
        console.log(this.state)
        // ref.push(this.state);
    }




    render(){
        const { classes } = this.props;
        return(
            <>
                <AppBarLogin/>                      {/* check if the user is login in or not  */}
                <LayoutBody className={classes.layoutBody} width="xlarge">
                    <Typography variant="h3" align="center" component="h6" className={classes.heading}>
                        Let's make a Booking
                    </Typography>
                    <HorizontalLinearStepper/>
                    
                </LayoutBody>
            </>

            
        );
    }
}

export default withStyles(styles)(BookingPage);