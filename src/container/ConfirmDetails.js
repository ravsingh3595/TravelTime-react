import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
   
  }));

function ConfirmDetails(props) {
  const classes = useStyles();
  

  return (
    <div>
      <Typography>
        
      </Typography>
        <h3>Please comfirm to procced</h3>
        <h6>Number of travellers : {props.bookingInfo.numOfTravellers}</h6>
        <h6>Email : {props.bookingInfo.email}</h6>
        <h6>Travllers: {Object.keys(props.bookingInfo.travellers).map( (val) =>{

            return (
                <p>Traveller {val} - {props.bookingInfo.travellers[val]}</p>
            )
        })}</h6>
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
