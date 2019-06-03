import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../Actions/Validations/Signup';

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
            confirmPassword:'', 
            errors: {},
            isLoading: false,

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    isValid(){
        const {errors, isValid} = validateInput(this.state)
        if(!isValid){
            this.setState({errors})
        }
        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.isValid()){
            this.setState({errors: {}, isLoading: false});
            this.props.userSignupRequest(this.state).then(
                ()=> {},
                ({data})=> { this.setState({ errors: data , isLoading: false})}
            );
        }
    }

    render(){
        const {errors} = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Sign up here!</h1>
                <div className={classnames("form-group", (errors.username  ? "has-error" :""))}>
                    <label className="control-label">UserName</label>
                    <input 
                        value={this.state.username}
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={this.onChange}
                    />
                    {errors.username && <span className="help-block">{errors.username}</span>}
                    </div>
                    <div className="form-group">
                    <label className="control-label">Email</label>
                    <input 
                        value={this.state.email}
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group">
                    <label className="control-label">Password</label>
                    <input 
                        value={this.state.password}
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group">
                    <label className="control-label">Confirm Password</label>
                    <input 
                        value={this.state.confirmPassword}
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        onChange={this.onChange}
                    />
                    <div className="form-group">
                        <button disabled={this.state.isLoading} className="btn btn-primary btn-log">
                            Sign up
                        </button>
                    </div>
                </div>

            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest : PropTypes.func.isRequired
        
}

export default SignupForm;