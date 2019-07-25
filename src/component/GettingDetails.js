import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Picker from '../component/Picker';
import { Typography, Button } from '@material-ui/core';
import fire from '../Firebase/Firebase';
import TextFieldComponent from '../component/TextFieldComponent';
import shortid from 'shortid';
import DateTimePicker from 'react-datetime-picker';

const styles = theme => ({
  container:{
      
  }
});

const database = fire.database();
const ref = database.ref('bookingDetails');

function generateBookingID(){
    var data = {
        bookingID: shortid.generate(),
        date: new Date()
    }
}

class GettingDetails extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                numberOfTravellers: 0,
                submittedTravellers: 0,
                firstName: "",
                lastName: "",
                email: "",
                contactNumber: "",
                bookingId: "",
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
            this.setState({bookingId: shortid.generate()})
            ref.push(this.state);
            console.log(fire);
        }
        render(){
            const { classes } = this.props;

        return(
            <section className={classes.container}>
                {generateBookingID()
                }
                <Typography>Enter all the Information</Typography>
                <Picker/>
                <form>
                    <TextFieldComponent id="firstName" name="firstName" label="First Name" type="text" onChange={this.onChange}/>
                    <TextFieldComponent id="lastName" name="lastName" label="Last Name" type="text" onChange={this.onChange}/>
                    <TextFieldComponent id="email" name="email" label="Email Address" type="email" autoComplete="email" onChange={this.onChange}/>
                    <TextFieldComponent id="contactNumber" name="contactNumber" label="Contact Number" type="text" onChange={this.onChange}/>
                    <Button type="submit" variant="contained" color="primary" onClick={this.saveDetails}>
                        {this.numberOfTravellers === this.submittedTravellers ? 'Press Confirm Information' : 'Next'}
                    </Button> 
                </form>
                
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