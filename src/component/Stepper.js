import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { itineraryData } from "../dummyData.js";

import fire from "../Firebase/Firebase";

import GettingDetails from "../component/GettingDetails";
import ConfirmDetails from '../container/ConfirmDetails';
import Payment from '../container/Payment';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    // padding: "50",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  article: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  aside1: {
    padding: 30,
    flex: 7,
    borderRight: "6px solid black"
  },
  aside2: {
    flex: 2,
    padding: 30
  },
  destination: {
    border: "2px solid black",
    padding: 20
  }
}));

function getSteps() {
  return [
    "Provide all the information of the travellers",
    "Confirming the details",
    "Pay and Confirm"
  ];
}

function getStepContent(stepIndex, isNextClicked) {
  switch (stepIndex) {
    case 0:
      return (
        <div>
          {/* {this.setBookingId(shortid.generate())}
          {ref.push(this.bookingId)} */}
          <GettingDetails isNextClicked={isNextClicked} />
        </div>
      );
    case 1:
      return <ConfirmDetails/>;
    case 2:
      return <Payment/>;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isNextClicked, setisNextClicked] = React.useState(false);
  // const [date, setDate] = React.useState(new Date());
  // const [bookingId, setBookingId] = React.useState(0);

  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setisNextClicked(true);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  console.log("PAPAPA", isNextClicked);
  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ backgroundColor: "#DBFFE5" }}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <section className={classes.article}>
              <section className={classes.aside1}>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep, isNextClicked)}
                </Typography>

                <div>
                  {/* <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button> */}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </section>

              <section className={classes.aside2}>
                <Typography
                  variant="h4"
                  align="center"
                  component="h6"
                  className={classes.heading}
                >
                  Your Choosen Destination.
                </Typography>
                <div className={classes.destination}>
                  <img
                    src={itineraryData.tripImage}
                    alt="Mountains"
                    width="350"
                    height="200"
                  />
                  <Typography variant="h6" className={classes.heading}>
                    {itineraryData.tripName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="h6"
                    className={classes.heading}
                  >
                    {itineraryData.tripHighLight}
                  </Typography>
                </div>
              </section>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
