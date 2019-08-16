import React, { Component } from "react";
import { profileData } from "../dummyData";
import { connect } from "react-redux";
import { withStyles, Typography } from "@material-ui/core";
import TextFieldComponent from '../component/TextFieldComponent';
import Button from '../component/Button';

const styles = theme =>({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: 'column',
    justifyContent: "center",
    backgroundColor: "#DBFEE6",
  },
  button: {
    minWidth: 50,
    width: 150,
    borderRadius: "5px",
    margin: '40px 0 0 0',
  },
  form:{

  },
 
})


class PersonalDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
       email: ""
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
}

  render() {
    const {classes} = this.props;
    return (
        <div  >
            <form className={classes.container} autoComplete="off">
                <TextFieldComponent id="email" name="email" label="Email Address" type="email" autoComplete="email" onChange={this.onChange}/>  
                <TextFieldComponent id="email" name="email" label="Email Address" type="email" autoComplete="email" onChange={this.onChange}/>  
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
