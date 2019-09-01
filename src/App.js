import React from "react";
import PropTypes from "prop-types";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import fire from "./Firebase/Firebase";
import { MuiThemeProvider } from "@material-ui/core/styles";
import rawTheme from "./theme";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isUserLoggedIn: false
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ email: user.email, isUserLoggedIn: true });
        console.log(this.state.email);
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ email: null });
        console.log(this.state.email);
        // localStorage.removeItem('user');
      }
    });
  }

  render() {
    console.log(this.state.isUserLoggedIn);
    const { isUserLoggedIn } = this.state;
    return (
      <MuiThemeProvider theme={rawTheme}>
        <React.Fragment>
          {this.state.email ? (
            <Home history = {this.props.history} isUserLoggedIn={isUserLoggedIn} />
          ) : (
            <LoginPage history={this.props.history} />
          )}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default App;
