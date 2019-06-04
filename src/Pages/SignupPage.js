import React from 'react';
import SignupForm from '../container/SignupForm';
import {connect} from 'react-redux';
import { userSignupRequest } from '../Actions/SignupActions';
import PropTypes from 'prop-types';

class SignupPage extends React.Component{
    render(){
        const { userSignupRequest } = this.props;
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm userSignupRequest={userSignupRequest}/>
                </div>
            </div>
            
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest : PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(SignupPage);