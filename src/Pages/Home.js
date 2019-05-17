import React from 'react';
import AppBar from '../container/AppAppBar.js';
import SearchDestination from '../container/SearchDestination';
import Values from '../container/Values';
import TopChoices from '../container/TopChoices';
import Steps from '../container/Steps';
import Help from '../container/Help';
import Footer from '../container/Footer';

function Home() {
  return (
    <React.Fragment>
      <AppBar/>
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
