import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '../component/Typography';
import Button from '../component/Button';
import Image from '../assest/travel-world.jpg';
import validateInput from '../Actions/Validations/Login';
import AppBar from '../container/AppAppBar.js';
import fire from '../Firebase/Firebase';

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
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    }

    // isValid(){
    //     const {errors, isValid} = validateInput(this.state)
    //     if(!isValid){
    //         // this.setState({errors})
    //     }
    //     return isValid;
    // }

    onSubmit(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u)=>{

            this.props.history.push('/');
        }).catch((errorFromLogin) => {
            this.setState({errors: errorFromLogin})
            console.log(errorFromLogin);
          });
      }
    
    // onSubmit(event) {
    //     event.preventDefault();
    //     if (true){
    //         this.setState({errors: {}, isLoading: false});
    //         fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    //         .then((u)=>{
    //             console.log(u);
    //             this.props.history.push('/');
    //         })
    //         .catch((error) => {
    //             this.setState({errors: error})
    //             console.log(this.state.password);
    //             console.log(error, this.state.password);
    //           });
    //     }
    // }
  
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
                            {errors.code  && <span className="helpBlock">{errors.message}</span>}
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
                            name="password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.onChange}
                        />
                        {errors.password && <span className="helpBlock">{errors.password}</span>}
                        <Button
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
          

