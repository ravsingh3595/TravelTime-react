import React from "react"
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StarRatings from "react-star-ratings";

const ReviewCard = (props) => {
    return(
        <Paper
          style={{
            padding: "10px",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "60%",
          }}
        >
          <Typography variant="h4" gutterBottom style={{color : "#5BA16F"}}>
            {props.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom style={{fontStyle : "italic"}}>
            "{props.reviewText}"
          </Typography>
          <StarRatings
            rating={props.ratings}
            starRatedColor="#5BA16F"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
          />
        </Paper>
    )
}

export default ReviewCard