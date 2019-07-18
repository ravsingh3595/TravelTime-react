import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Picker from '../component/Picker';
import { Typography, Button } from '@material-ui/core';

import TextFieldComponent from '../component/TextFieldComponent';

const styles = theme => ({
  container:{
      
  }
});



class GettingDetails extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                numberOfTravellers: 0,
                submittedTravellers: 0
    
            }
            this.onChange = this.onChange.bind(this);
            this.saveDetails = this.saveDetails.bind(this);
        }


        onChange(event) {
            console.log("heloo I'm in onchange")
            this.setState({ [event.target.name]: event.target.value });
        }

        saveDetails(event){
            this.setState({submittedTravellers : this.submittedTravellers +1});
        }
        render(){
            const { classes } = this.props;

        return(
            <section className={classes.container}>
                <Typography>Enter all the Information</Typography>
                <Picker/>
                <TextFieldComponent id="firstName" name="firstName" label="First Name" type="text" onChange={this.onChange}/>
                <TextFieldComponent id="lastName" name="lastName" label="Last Name" type="text" onChange={this.onChange}/>
                <TextFieldComponent id="email" name="email" label="Email Address" type="email" autoComplete="email" onChange={this.onChange}/>
                
                <Button variant="contained" color="primary" onClick={this.saveDetails}>
                    {this.numberOfTravellers === this.submittedTravellers ? 'Press Confirm Information' : 'Next'}
                </Button> 
                {/* <Button
                    disabled={numberOfTravellers === 0}
                    onClick={saveDetails}
                    className={classes.backButton}
                    >
                    Back
                    </Button>
                    */}
                <div>


                </div>
            </section>
        );
    }}



export default withStyles(styles)(GettingDetails)