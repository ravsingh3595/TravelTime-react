import React from 'react';
import LayoutBody from '../component/LayoutBody';
import AppBar from '../container/AppAppBar';
import AppBarLogin from '../container/AppBarLogin';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../component/Typography';
import HorizontalLinearStepper from '../component/Stepper';

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

class BookingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isUserLoggedIn : true
        }
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