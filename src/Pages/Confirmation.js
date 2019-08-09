import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../component/Typography';
import Button from '../component/Button';

const styles = theme => ({
    container:{
     },

})

class Confirmation extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                <Typography>
                    Congratulations!
                </Typography>
                
            </div>
        )
    }
}

export default withStyles(styles)(Confirmation);