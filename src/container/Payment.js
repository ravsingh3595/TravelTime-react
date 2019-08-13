import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../component/Typography';
import Button from '../component/Button';

const styles = theme => ({
    container:{
        border: '2px solid red',
        padding: '20px',
    },

})

class Payment extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                <Typography>
                    Pay and its all Done!
                </Typography>
                <form onSubmit={this.onSubmit}>
                    <label> Enter Card Holder Name</label>
                    <input type="text"></input><br/>
                    <label> Enter 16 Digit Card Number</label>
                    <input type="text"></input><br/>
                    <label> Enter CVV</label>
                    <input type="text"></input>
                    <label> Expiry Date</label>
                    <input type="text"></input><br/>
                </form>

            </div>
        )
    }
}

export default withStyles(styles)(Payment);