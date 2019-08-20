import React, { Component } from "react";
import { profileData } from "../dummyData";
import { connect } from "react-redux";
import { withStyles, Typography } from "@material-ui/core";
import TextFieldComponent from '../component/TextFieldComponent';
import Button from '../component/Button';

import fire from "../Firebase/Firebase";


const styles = theme =>({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: 'column',
    justifyContent: "center",
    backgroundColor: "#DBFEE6",
    paddingBottom: 20,
  },
  button: {
    minWidth: 50,
    width: 150,
    borderRadius: "5px",
    margin: '40px 0 0 0',
  },
  heading: {
    color: "#5BA16F",
    marginTop: "30px",
    paddingBottom: 20,
    fontWeight: "bold"
  },
  form:{

  },
 
})


const database = fire.database();
const ref = database.ref("profileDetails");

class PersonalDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
       email: "",
       firstName: "",
       lastName: "",
       contactNum: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
onChange(event) {
    console.log("heloo I'm in onchange")
    this.setState({ [event.target.name]: event.target.value });
}


onSubmit(event) {
    event.preventDefault();
    console.log("heloo I'm in onsubmit")

    // ref.push(this.state);
}

  render() {
    const {classes} = this.props;
    return (
        <div className={classes.container}  >
          <Typography
            variant="h3"
            align="center"
            component="h6"
            className={classes.heading}
          >
            Profile
          </Typography>
            <form className={classes.container} autoComplete="off">
                <TextFieldComponent defaultValue="ravneets47@gmail.com" id="email" name="email" label="Email Address" type="email" autoComplete="email" onChange={this.onChange}/>  
                <TextFieldComponent defaultValue="Ravneet" id="firstName" name="firstName" label="First Name" type="text" onChange={this.onChange}/> 
                <TextFieldComponent defaultValue="Singh" id="lastName" name="lastName" label="Last Name" type="text" onChange={this.onChange}/>  
                <TextFieldComponent defaultValue="+918447555925" id="contactNum" name="contactNum" label="Conatct Number" type="text" onChange={this.onChange}/>  
                <Button variant="outlined" size="small" className={classes.button} onClick={this.onSubmit}>
                    Save Details
                </Button>
            </form>
        </div>
    );
  }
}


function mapStateToProps(state) {
    return {
    //   email: state.bookingInfo.numOfTravellers /// bookingInfor??
    };
  }
  export default withStyles(styles)(
    connect(
      mapStateToProps
    )(PersonalDetails)
  );
