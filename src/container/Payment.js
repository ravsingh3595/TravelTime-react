import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../component/Typography';
import Input from '@material-ui/core/Input';

const styles = theme => ({
    container: {
        display: 'flex',
        padding: '20px',
        flexWrap: 'wrap',
      },
      input: {
        marginLeft: theme.spacing(1),
      },


})

class Payment extends React.Component{

    componentWillUnmount(){
        console.log("payment page unmounted")
    }

    render(){
        const { classes } = this.props;
        return(

        <div className={classes.box}>
            <Typography variant="h4" align="center" component="h5" >
                Pay and its all Done!
            </Typography>
            <br />
            <br />
            <div className={classes.container}>
                <Typography variant="subtitle1" component="h6">
                    Enter Card Holder Name: 
                </Typography>
                <Input
                    placeholder="Card holder name"
                    className={classes.input}
                />
            </div>

            <div className={classes.container}>
                <Typography variant="subtitle1" component="h6">
                    Enter 16 Digit Card Number:
                </Typography>
                <Input
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    className={classes.input}
                    inputProps={{'aria-label': 'Card holder name'}}
                />
            </div>

            <div className={classes.container}>
                <Typography variant="subtitle1" component="h6">
                    Enter 3 Digit CVV: 
                </Typography>
                <Input
                    placeholder="123"
                    className={classes.input}
                    inputProps={{'aria-label': 'Card holder name'}}
                />
                <Typography variant="subtitle1" component="h6">
                    Enter Expiry Date: 
                </Typography>
                <Input
                    placeholder="01/2009"
                    className={classes.input}
                    inputProps={{'aria-label': 'Card holder name'}}
                />
            </div>
      </div>
        )
    }
}

export default withStyles(styles)(Payment);