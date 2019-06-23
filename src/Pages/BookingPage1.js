import React from 'react';
import HorizontalLinearStepper from '../component/Stepper';

class BookingPage1 extends React.Component{
    render(){
        return(
            <div>
                <h1>Lets Make a Booking!</h1>
                <h6>Enter your details</h6>
                <HorizontalLinearStepper/>
            </div>
        );
    }
}

export default BookingPage1;