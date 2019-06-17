import React from 'react';
import SignupForm from '../container/SignupForm';
import {connect} from 'react-redux';
import { userSignupRequest } from '../Actions/SignupActions';
import { addAlertMessage } from '../Actions/alertMessage';
import PropTypes from 'prop-types';

class SignupPage extends React.Component{
    render(){
        const { userSignupRequest, addAlertMessage} = this.props;
        return(
            <SignupForm userSignupRequest={userSignupRequest} history={this.props.history} addAlertMessage= {addAlertMessage}/>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest : PropTypes.func.isRequired,
    addAlertMessage: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export default connect(null, {userSignupRequest, addAlertMessage})(SignupPage);