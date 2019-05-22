import React from 'react';
import axios from 'axios';

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
            confirmPassword:''

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post('/api/users', {user: this.state});
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Sign up here!</h1>
                <div className="form-group">
                    <label className="control-label">UserName</label>
                    <input 
                        value={this.state.username}
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={this.onChange}
                    />

                    <label className="control-label">Email</label>
                    <input 
                        value={this.state.email}
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={this.onChange}
                    />
                    <label className="control-label">Password</label>
                    <input 
                        value={this.state.password}
                        type="text"
                        name="password"
                        className="form-control"
                        onChange={this.onChange}
                    />

                    <label className="control-label">Confirm Password</label>
                    <input 
                        value={this.state.confirmPassword}
                        type="text"
                        name="confirmPassword"
                        className="form-control"
                        onChange={this.onChange}
                    />
                    <div className="form-group">
                        <button className="btn btn-primary btn-log">
                            Sign up
                        </button>
                    </div>
                </div>

            </form>
        );
    }
}

export default SignupForm;