import React from "react";
import { withStyles } from "@material-ui/core/styles";
import fire from "../Firebase/Firebase";
import TextFieldComponent from "../component/TextFieldComponent";
import shortid from "shortid";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  container: {}
});

class TravellerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      bookingId: ""
    };
    this.onChange = this.onChange.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
  }

  onChange(event) {
    console.log("heloo I'm in onchange");
    this.setState({ [event.target.name]: event.target.value });
  }

  saveDetails(event) {
    this.setState({ submittedTravellers: this.submittedTravellers + 1 });
    this.setState({ bookingId: shortid.generate() });
  }
  render() {
    const { classes, val } = this.props;

    return (
      <React.Fragment>
        <Typography> Traveller {val + 1} details</Typography>
        <form>
          <TextFieldComponent
            id="fullName"
            name="fullName"
            label="Full Name"
            type="text"
            onChange={this.onChange}
            onBlur={event => this.props.setFullName(event.target.value, val)}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(TravellerForm);
