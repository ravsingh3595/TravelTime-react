import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  box: {
    // border: "2px solid #5BA16F",
    width: "70%",
    margin: "10px",
    color: "#626262",
    padding: "50px",
    paddingTop: "20px",
    paddingBottom: "20px",
    marginTop: "20px",
    marginBottom: "40px"
  }
  }));

function ConfirmDetails(props) {
  const classes = useStyles();
  
  let data;

  
    if (props.bookingInfo.travellers == null) {
      data =  <Typography variant="subtitle1" component="h6"><p>Please select the number of travellers</p></Typography>
    }
    else{
      data = <Typography variant="subtitle1" component="h6">{Object.keys(props.bookingInfo.travellers).map( (val) =>{
                return (<p>Traveller Name {val} - {props.bookingInfo.travellers[val]}</p>)})}
              </Typography>
    }

  
  

  return (
    <div>
      <div className={classes.box}>
        <Typography variant="h4" align="center" component="h5" >
          Please confirm to proceed
        </Typography>
        <br />
        <br />
        <Typography variant="subtitle1" component="h6">
          Number of Travellers : {props.bookingInfo.numOfTravellers}
        </Typography>

        <Typography variant="subtitle1" component="h6">
          Confirmation Email : {props.bookingInfo.email}
        </Typography>

        <Typography variant="subtitle1" component="h6">
          Contact Number : {props.bookingInfo.contactNum}
        </Typography>

        <Typography variant="subtitle1" component="h6">
          Journey Start date : {props.bookingInfo.fromDate}
        </Typography>

        <Typography variant="subtitle1" component="h6">
          Journey End date : {props.bookingInfo.toDate}
        </Typography>

        {data}

        <br />
        <br />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    bookingInfo: state.bookingInfo
  };
}
export default connect(
  mapStateToProps,
  { }
)(ConfirmDetails);
