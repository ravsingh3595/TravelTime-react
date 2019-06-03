import React from "react"
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StarRatings from "react-star-ratings";

const ReviewCard = (props) => {
    return(
        <Paper
          style={{
            padding: "10px",
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50%"
          }}
        >
          <Typography variant="h3" gutterBottom>
            {props.name}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {props.reviewText}
          </Typography>
          <StarRatings
            rating={props.ratings}
            starRatedColor="red"
            numberOfStars={5}
            name="rating"
          />
        </Paper>
    )
}

export default ReviewCard