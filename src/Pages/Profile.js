import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { profileData } from "../dummyData";
import { connect } from "react-redux";
import ReviewCard from "../component/ReviewCard"
import { withStyles, Typography } from "@material-ui/core";

import AppBar from '../container/AppBarLogin';

const styles = theme =>({
  container: {
    padding: '20px',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: '100%',
    maxWidth: '1160px',
    padding: "30px",
    margin: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    
  }, 
  profileImage:{
    backgroundImage: "url(" + profileData.profileImage + ")",
    border: '2px solid #000',
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    marginRight: "10px"
  }
})


class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
        isUserLoginIn: true,
    }
  }

changeProfile(){
  console.log("CHnage DP");
  
}

componentDidUpdate(prevProps) {
  const { dispatch, redirectUrl } = this.props
  const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
  const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

  if (isLoggingIn) {
    // dispatch(navigateTo(redirectUrl))
  } else if (isLoggingOut) {
    // do any kind of cleanup or post-logout redirection here
  }
}


  render() {
    const {classes} = this.props;
    
    return (
      <div>
        <AppBar/>
        <div className={classes.container}>
          <Paper className={classes.paper} >
            <div className={classes.profileImage} onClick={this.changeProfile}/>
            <div>
              <Typography variant='h4'>
                {profileData.firstname + " " + profileData.lastname}
              </Typography>
              <Typography variant='h6'>
                Location
              </Typography>
            </div>
          </Paper>
        </div>

        <div className={classes.container} style={{flexDirection: 'row', maxWidth: "1160px",}}>
          <Paper  >
            <h1>hello1</h1>
          </Paper>
          <Paper  >
          <h1>hello2</h1>
          </Paper>

        </div>
       

{/* 
            {profileData.reviews.map( review => {
                return(
                    <ReviewCard name = {review.name} 
            reviewText = {review.reviewText} 
            ratings = {review.ratings}></ReviewCard>
                )
            
            })} */}

    

       
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     isLoggedIn: state.loggedIn,
//     redirectUrl: state.redirectUrl
//   }
//   }

export default withStyles(styles)
  // x
  (Profile);






// render() {
//   return this.props.children
// }
// }

