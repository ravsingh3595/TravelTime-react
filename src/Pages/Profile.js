import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { profileData } from "../dummyData";
import StarRatings from "react-star-ratings";
import ReviewCard from "../component/ReviewCard"

class Profile extends Component {
  render() {
    return (
      <div>
        <Paper
          style={{
            padding: "50px",
            margin: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              backgroundImage: "url(" + profileData.profileImage + ")",
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              marginRight: "10px"
            }}
          />
          {profileData.firstname + " " + profileData.lastname}
        </Paper>


            {profileData.reviews.map( review => {
                return(
                    <ReviewCard name = {review.name} 
            reviewText = {review.reviewText} 
            ratings = {review.ratings}></ReviewCard>
                )
            
            })}

    

       
      </div>
    );
  }
}

export default Profile;
