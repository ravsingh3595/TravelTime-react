import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../container/AppAppBar.js';
import SearchDestination from '../container/SearchDestination';
import Values from '../container/Values';
import TopChoices from '../container/TopChoices';
import Steps from '../container/Steps';
import Help from '../container/Help';
import Footer from '../container/Footer';
import AppBarLogin from '../container/AppBarLogin';
import FlashMessageList from '../FlashMessage/FlashMessagesList';
import fire from '../Firebase/Firebase';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        isUserLoggedIn : true
      }
      this.logout = this.logout.bind(this);
    }
    
    logout() {
      this.setState({ isUserLoggedIn: !this.state.isUserLoggedIn });
      fire.auth().signOut();
    }

  render(){
    const {isUserLoggedIn} = this.props;
    // this.setState({isUserLoggedIn: isUserLoggedIn})
    return(
      <React.Fragment>
        {isUserLoggedIn ? (<AppBarLogin triggerParentUpdate={this.logout} />): ( <AppBar /> ) }
        {/* <AppBarLogin/> */}
      <FlashMessageList/>
      <SearchDestination/>
      <Values/>
      <TopChoices history = {this.props.history}/>
      <Steps/>
      <Help/>
      <Footer/>
    </React.Fragment>
    )
  }
}

// function Home() {
  
//   return (
//     <React.Fragment>
//       <AppBar/>
//       <FlashMessageList/>
//       <SearchDestination/>
//       <Values/>
//       <TopChoices/>
//       <Steps/>
//       <Help/>
//       <Footer/>

//     </React.Fragment>
//   );
// }
Home.propTypes = {
  isUserLoggedIn : PropTypes.bool.isRequired
      
}
export default Home;
