import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "../component/Typography";
import Button from "../component/Button";
import LayoutBody from "../component/LayoutBody";
import AppBarLogin from "../container/AppBarLogin";
import Footer from "../container/Footer";
import ThumbUp from "@material-ui/icons/ThumbUp";

const styles = theme => ({
  layoutBody: {
    backgroundColor: "#DBFFE5",
    overflow: "hidden"
  },
  heading: {
    color: "#5BA16F",
    marginTop: "30px",
    paddingBottom: 10,
    fontWeight: "bold"
  },
  iconThumb: {
    color: "#5BA16F",
    margin: "0 auto",
    fontSize: "60px"
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    border: "2px solid #5BA16F",
    width: "50%",
    margin: "10px",
    color: "#626262",
    padding: "50px",
    paddingTop: "20px",
    paddingBottom: "20px",
    marginTop: "20px",
    marginBottom: "40px"
  }
});

class Confirmation extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.history.push('/')
    }
  render() {
    const { classes } = this.props;
    return (
      <>
        <AppBarLogin /> {/* check if the user is login in or not  */}
        <LayoutBody className={classes.layoutBody} width="xlarge">
          <Typography
            variant="h3"
            align="center"
            component="h6"
            className={classes.heading}
          >
            Congratulations!
          </Typography>

          <br />
          <div className={classes.wrapper}>
            <ThumbUp className={classes.iconThumb} />
          </div>
          <br />
          <Typography variant="h6" align="center" component="h6">
            Your payment for successful
          </Typography>

          <div className={classes.wrapper}>
            <Typography variant="h6" align="center" component="h6">
              Confirmation ID : 1299GHGG43
            </Typography>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.box}>
              <Typography variant="h5" align="center" component="h5">
                Itinerary details
              </Typography>

              <Typography variant="subtitle1" component="h6">
                Booking Details :
              </Typography>
              <Typography variant="subtitle1" component="h6">
                Destination : Tobermory
              </Typography>
              <Typography variant="subtitle1" component="h6">
                Number of Travellers : 3
              </Typography>

              <Typography variant="subtitle1" component="h6">
                Confirmation Email : ravs47@gmail.com
              </Typography>

              <Typography variant="subtitle1" component="h6">
                Contact Number : 446 889-9115
              </Typography>
              <br />
              <br />
              <Typography variant="subtitle2" align="center">
                For cancellations and other queries please contact (1877)
                432-7778
              </Typography>
            </div>
            <br />
          </div>
          <div className={classes.wrapper}>
          <Typography variant="subtitle2" align="center">
              <a onClick = {this.handleClick}> Go to Home</a>
              </Typography>
           
          </div>
        </LayoutBody>
        <Footer />
      </>
    );
  }
}

export default withStyles(styles)(Confirmation);
