import React from "react";

import { withStyles, Typography, Button } from "@material-ui/core";
import TextField from "../component/TextFieldComponent";
import TextArea from "../component/TextArea";
import fire from "../Firebase/Firebase";
import ReviewCard from "../component/ReviewCard"

const styles = theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#DBFEE6",
    paddingBottom: 20
  },
  button: {
    minWidth: 50,
    width: 150,
    borderRadius: "5px",
    margin: "40px 0 0 0"
  },
  heading: {
    color: "#5BA16F",
    marginTop: "30px",
    paddingBottom: "20",
    fontWeight: "bold"
  },
  form: {}
});

const database = fire.database();
const ref = database.ref("reviews");

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      destination: "",
      rating: "",
      review: ""
    };
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    const newReview = {
      destination: this.state.destination,
      rating: this.state.rating,
      review: this.state.review
    };
    const updatedReviews = this.state.reviews;
    updatedReviews.push(newReview)


    this.setState({
      reviews: updatedReviews,
      destination: "",
      rating: "",
      review: ""
    });
    ref.push(this.state);
  }

  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography
          variant="h3"
          align="center"
          component="h6"
          className={classes.heading}
        >
          Add a Review
        </Typography>

        <br />

        <TextField
          id="destination"
          name="destination"
          label="Destination Name"
          type="text"
          onChange={this.handleChange}
          value={this.state.destination}
        />
        <br />
        <TextField
          id="rating"
          name="rating"
          label="Rating (0-5)"
          type="text"
          onChange={this.handleChange}
          value={this.state.rating}
        />
        <br />
        <TextArea
          id="review"
          name="review"
          label="Review"
          type="textarea"
          onChange={this.handleChange}
          value={this.state.review}
        />
      
        <Button
          variant="outlined"
          size="small"
          className={classes.button}
          onClick={this.onClick}
        >
          Add Review
        </Button>
        <br />
        <br />
        {this.state.reviews.map( review => {
          return(
              <ReviewCard 
                name = {review.destination} 
                reviewText = {review.review} 
                ratings = {parseInt(review.rating,10)}>
              </ReviewCard>
              )
            })} 
      </div>
    );
  }
}

export default withStyles(styles)(Reviews);
