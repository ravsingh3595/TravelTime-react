import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Picker from "../component/Picker";
import { Typography, Button } from "@material-ui/core";
import fire from "../Firebase/Firebase";
import TextFieldComponent from "../component/TextFieldComponent";
import shortid from "shortid";
import DateTimePicker from "react-datetime-picker";
import TravelDateSelector from "./TravelDateSelector";
import { connect } from "react-redux";
import TravellerForm from "./TravellerForm";
import {
  setEmail,
  setContactNum,
  setFromDate,
  setToDate,
  setFullName
} from "../Actions/BookingActions";

const styles = theme => ({
  container: {}
});

const database = fire.database();
const ref = database.ref("bookingDetails");

function generateBookingID() {
  var data = {
    bookingID: shortid.generate(),
    date: new Date()
  };
}

class GettingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfTravellers: 0,
      email: "",
      bookingId: "",
    };
    this.onChange = this.onChange.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
    this.handleContactBlur = this.handleContactBlur.bind(this);
    this.handleEmailBlur = this.handleEmailBlur.bind(this);
  }

  componentDidUpdate(nextProps) {
    console.log("nextProps gettin details", nextProps);
  }

  onChange(event) {
    console.log("heloo I'm in onchange");
    this.setState({ [event.target.name]: event.target.value });
  }

  saveDetails(event) {
    this.setState({ submittedTravellers: this.submittedTravellers + 1 });
    this.setState({ bookingId: shortid.generate() });
    //ref.push(this.state);
    //console.log(fire);
  }

  handleEmailBlur(e) {
    this.props.setEmail(e.target.value);
  }
  handleContactBlur(e) {
    this.props.setContactNum(e.target.value);
  }

  render() {
    const { classes } = this.props;
    const travellers = [...Array(this.props.numOfTravellers).keys()];
    return (
      <section className={classes.container}>
        {generateBookingID()}
        <Typography>Enter all the Information</Typography>
        <Picker />
        <TextFieldComponent
          id="email"
          name="email"
          label="Email Address"
          type="email"
          autoComplete="email"
          onChange={this.onChange}
          onBlur={this.handleEmailBlur}
        />
        <TextFieldComponent
          id="contactNumber"
          name="contactNumber"
          label="Contact Number"
          type="text"
          onChange={this.onChange}
          onBlur={this.handleContactBlur}
        />


        {travellers.map(val => {
          return (
            <TravellerForm val={val} setFullName={this.props.setFullName} />
          );
        })}
        <TravelDateSelector
          setFromDate={this.props.setFromDate}
          setToDate={this.props.setToDate}
        />


        {/* <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={this.saveDetails}
        >
          {this.numberOfTravellers === this.submittedTravellers
            ? "Press Confirm Information"
            : "Next"}
        </Button> */}

        {/* <Button
              disabled={numberOfTravellers === 0}
              onClick={saveDetails}
              className={classes.backButton}
              >
              Back
              </Button>
              */}

        <div />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    numOfTravellers: state.bookingInfo.numOfTravellers,
    emailForLoggedUser: state.emailForLoggedUser
  };
}
export default withStyles(styles)(
  connect(
    mapStateToProps,
    { setEmail, setContactNum, setFromDate, setToDate, setFullName }
  )(GettingDetails)
);
