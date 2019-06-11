import React from 'react';
import Image from '../assest/travel-world.jpg';
import { withStyles } from '@material-ui/core/styles';
import TextFieldComponent from '../component/TextFieldComponent';
import Typography from '../component/Typography';
import Button from '../component/Button';
import PropTypes from 'prop-types';
import validateInput from '../Actions/Validations/Signup';
import AppBar from '../container/AppAppBar.js';
import fire from '../Firebase/Firebase';
// import { withRouter } from 'react-router-dom';

const styles = theme => ({
    main:{
        display: 'flex',
        justifyContent : 'center',
        textAlignVertical: 'center',
        height: '100%',
    },
    container: {
        width: 500,
        marginTop: 100,
        marginBottom: 100,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent : 'center',
        alignItems:  'center',
        background: 'rgb(115, 197, 139)',
        borderRadius: '25px',
        padding: "70px 0px 50px 0px",
        
    },
    heading: {
        color: "#fff", 
        marginTop: "30px",
        paddingBottom: 40,
        fontWeight: 'bold',
    },
    button: {
        minWidth: 50,
        width: 150,
        borderRadius: "5px",
        margin: '40px 0 0 0',
      },
    helpBlock: {

    },
});
  
class SignupForm extends React.Component {
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


// componentDidMount() {
//     const rootRef = firebase.database().ref().child('signup');
//     const speedRef = rootRef.child('email');
//     speedRef.on('value', snap => {
//         console.log(snap.val());
//     })
// }


    onChange(event) {
        console.log("heloo I'm in onchange")
        this.setState({ [event.target.name]: event.target.value });
    }

    isValid(){
        const {errors, isValid} = validateInput(this.state)
        if(!isValid){
            // this.setState({errors})
        }
        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();
        console.log("heloo I'm in onsubmit")
        if (true){
            this.setState({errors: {}, isLoading: false});
            fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u)=>{
                this.props.addAlertMessage({
                    type: 'success',
                    text: 'You signed up successfully, Welcome!'
                })
                this.props.history.push('/');
            })
            .catch((errorFromSignup) => {
                this.setState({errors: errorFromSignup })
                console.log(errorFromSignup);
              })
            // this.props.userSignupRequest(this.state)
            //     .then(
            //         ()=> {
            //             console.log("heloo I'm signed up")
            //             this.props.addAlertMessage({
            //                 type: 'success',
            //                 text: 'You signed up successfully, Welcome!'
            //             })
            //             // <Redirect push to="/" />
            //             // this.context.router.history.push('/');
            //             this.props.history.push('/');
            //         },
            //         ({data})=> {
            //             console.log("heloo I'm not signed up")
            //             this.setState({ errors: data , isLoading: false})
            //         }
            //     )
            //     .catch(error => console.log(error));
        }
    }
    render() {
        const { classes } = this.props;
        const {errors} = this.state;
    
        return (
            <div style={{backgroundImage: "url(" +  Image  + ")", backgroundRepeat: 'repeat', backgroundSize: '1024px 768px'}}>
                <AppBar/>
                <div className={classes.main}>
                    <form className={classes.container} autoComplete="off">
                        <Typography variant="h3" align="center" component="h6" className={classes.heading}>
                            Sign up
                        </Typography>
                        {/* <TextFieldComponent id="username" name="username" label="UserName" type="text" autoComplete="username" onChange={this.onChange}/> */}
                        {/* {errors.username && <span className="helpBlock">{errors.username}</span>} */}
                        <TextFieldComponent id="email" name="email" label="Email Address" type="email" autoComplete="email" onChange={this.onChange}/>
                        {(errors.code === "auth/email-already-in-user")  && <span className="helpBlock">{errors.message}</span>}
                        {(errors.code === "auth/invalid-email")  && <span className="helpBlock">{errors.message}</span>}
                        <TextFieldComponent id="password" name="password" label="Password" type="password" autoComplete="new-password" onChange={this.onChange}/>
                        {errors.code === "auth/weak-password" && <span className="helpBlock">{errors.message}</span>}
                        <TextFieldComponent id="ConfirmPassword" name="confirmPassword" label="Confirm Password" type="password" autoComplete="new-password" onChange={this.onChange}/>
                        {/* {errors.passwordConfirmation && <span className="helpBlock">{errors.passwordConfirmation}</span>} */}
                        <Button
                            variant="outlined" size="small" disabled={this.state.isLoading} className={classes.button} onClick={this.onSubmit}
                        >
                            Sign up
                        </Button>
                    </form>
                </div>  
            </div>
        )
    }
}

SignupForm.propTypes = {
    userSignupRequest : PropTypes.func.isRequired,
    addAlertMessage:  PropTypes.func.isRequired
}
// SignupForm.contextType = {
//     router: PropTypes.object.isRequired
// }
export default withStyles(styles)(SignupForm);
// withRouter(SignUpForm)