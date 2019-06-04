import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '../component/Typography';
import Button from '../component/Button';
import Image from '../assest/travel-world.jpg';
import validateInput from '../Actions/Validations/Login';
import AppBar from '../container/AppAppBar.js';

const styles = theme => ({
    main:{
        display: 'flex',
        justifyContent : 'center',
        textAlignVertical: 'center',
        height: '100%',
    },
    container: {
        width: 500,
        height: 500,
        marginTop: 100,
        marginBottom: 100,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent : 'center',
        alignItems:  'center',
        background: 'rgb(115, 197, 139)',
        borderRadius: '25px',
        padding: '10px',
    },
    textField: {
        width: '350px',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    heading: {
        color: "#fff", 
        marginTop: "20px",
        fontWeight: 'bold',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        
    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssLabel: {
        '&$cssFocused': {
        color: "#fff",
    },
    },
    cssFocused: {},
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: "#fff",
        },
      },
    notchedOutline: {},
    button: {
        minWidth: 50,
        width: 150,
        borderRadius: "5px",
        margin: '40px 0 0 0',
      },
});

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            errors: {},
            isLoading: false,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        console.log(event.target.value)
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
            // this.props.userSignupRequest(this.state).then(
            //     ()=> {},
            //     ({data})=> { this.setState({ errors: data , isLoading: false})}
            // );
        }
    }
  
    render() {
        const { classes } = this.props;
        const {errors} = this.state;
        return (
            <div style={{backgroundImage: "url(" +  Image  + ")", backgroundRepeat: 'repeat', backgroundSize: '1024px 768px'}}>
                <AppBar/>
                <div className={classes.main}>
                    <form className={classes.container} noValidate autoComplete="off">
                        <Typography variant="h3" align="center" component="h6" className={classes.heading}>
                            Login
                        </Typography>
                        <Typography variant="body2" align="center" style={{color: "#fff", marginBottom:'20px'}}>
                            {'Not a member yet? '}
                            <Link href="/signup" align="center" underline="always" >
                                Sign Up here
                            </Link>
                            </Typography>
                        <TextField
                            InputLabelProps={{
                                classes: {
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                                },
                            }}
                            InputProps={{
                                classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                                },
                            }}
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            onChange={this.onChange}
                        />
                        {errors.email && <span className="helpBlock">{errors.email}</span>}
                        <TextField
                            InputLabelProps={{
                                classes: {
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                                },
                            }}
                            InputProps={{
                                classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                                },
                            }}
                            id="outlined-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.onChange}
                        />
                        {errors.password && <span className="helpBlock">{errors.password}</span>}
                        <Button
                            color='#fff'
                            variant="outlined"
                            size="small"
                            className={classes.button}
                            onClick={this.onSubmit}
                            // component={linkProps => (
                            // <Link {...linkProps} href="/home" variant="button" />
                            // )}
                        >
                            Login
                        </Button>
                        {/* <Button
                            color='#fff'
                            variant="outlined"
                            size="small"
                            className={classes.button}
                            component={linkProps => (
                            <Link {...linkProps} href="/home" variant="button" />
                            )}
                        >
                            Sign In from Google
                        </Button> */}
                    </form>
            </div>
          </div>
        );
      }
    }

// Login.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
    
export default withStyles(styles)(Login);
          


// // import withRoot from './modules/withRoot';
// // --- Post bootstrap -----
// import React from 'react';
// import PropTypes from 'prop-types';
// import compose from 'recompose/compose';
// import { withStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
// // import { Field, Form, FormSpy } from 'react-final-form';
// import Typography from '../component/Typography';
// import AppBar from '../container/AppAppBar.js';
// import Footer from '../container/Footer';

// const styles = theme => ({
//   form: {
//     marginTop: theme.spacing.unit * 6,
//   },
//   button: {
//     marginTop: theme.spacing.unit * 3,
//     marginBottom: theme.spacing.unit * 2,
//   },
//   feedback: {
//     marginTop: theme.spacing.unit * 2,
//   },
// });

// class SignIn extends React.Component {
//   state = {
//     sent: false,
//   };

// //   validate = values => {
// //     const errors = required(['email', 'password'], values, this.props);

// //     if (!errors.email) {
// //       const emailError = email(values.email, values, this.props);
// //       if (emailError) {
// //         errors.email = email(values.email, values, this.props);
// //       }
// //     }

// //     return errors;
// //   };

//   handleSubmit = () => {};

//   render() {
//     const { classes } = this.props;
//     const { sent } = this.state;

//     return (
//       <React.Fragment>
//         <AppBar />
//         {/* <AppForm> */}
//           <React.Fragment>
//             <Typography variant="h3" gutterBottom marked="center" align="center">
//               Sign In
//             </Typography>
//             <Typography variant="body2" align="center">
//               {'Not a member yet? '}
//               <Link href="/" align="center" underline="always">
//                 Sign Up here
//               </Link>
//             </Typography>
//           </React.Fragment>
//           {/* <Form
//             onSubmit={this.handleSubmit}
//             subscription={{ submitting: true }}
//             validate={this.validate}
//           >
//             {({ handleSubmit, submitting }) => (
//               <form onSubmit={handleSubmit} className={classes.form} noValidate>
//                 <Field
//                   autoComplete="email"
//                   autoFocus
//                 //   component={RFTextField}
//                   disabled={submitting || sent}
//                   fullWidth
//                   label="Email"
//                   margin="normal"
//                   name="email"
//                   required
//                   size="large"
//                 />
//                 <Field
//                   fullWidth
//                   size="large"
//                 //   component={RFTextField}
//                   disabled={submitting || sent}
//                   required
//                   name="password"
//                   autoComplete="current-password"
//                   label="Password"
//                   type="password"
//                   margin="normal"
//                 />
//                 <FormSpy subscription={{ submitError: true }}>
//                   {({ submitError }) =>
//                     submitError ? (
//                       <FormFeedback className={classes.feedback} error>
//                         {submitError}
//                       </FormFeedback>
//                     ) : null
//                   }
//                 </FormSpy>
//                 <FormButton
//                   className={classes.button}
//                   disabled={submitting || sent}
//                   size="large"
//                   color="secondary"
//                   fullWidth
//                 >
//                   {submitting || sent ? 'In progress…' : 'Sign In'}
//                 </FormButton>
//               </form>
//             )}
//           </Form> */}
//           <Typography align="center">
//             <Link underline="always" href="/premium-themes/onepirate/forgot-password">
//               Forgot password?
//             </Link>
//           </Typography>
//         {/* </AppForm> */}
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

// SignIn.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default (SignIn);
