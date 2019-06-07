import React from 'react';
import AppBar from '../container/AppAppBar.js';
import SearchDestination from '../container/SearchDestination';
import Values from '../container/Values';
import TopChoices from '../container/TopChoices';
import Steps from '../container/Steps';
import Help from '../container/Help';
import Footer from '../container/Footer';
import Snackbar from '@material-ui/core/Snackbar';
import FlashMessageList from '../FlashMessage/FlashMessagesList';


function Home() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const {  vertical, horizontal, open } = state;

  function handleClose() {
    setState({ ...state, open: false });
  }
  
  return (
    <React.Fragment>
      {/* <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">You are successfully signed up, Welcome!</span>}
      /> */}
      <AppBar/>
      <FlashMessageList/>
      <SearchDestination/>
      <Values/>
      <TopChoices/>
      <Steps/>
      <Help/>
      <Footer/>

    </React.Fragment>
  );
}

export default Home;
