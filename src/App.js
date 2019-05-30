import React from 'react';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/SignupPage'
import SearchPage from './Pages/SearchPage';
import Itinerary from './Pages/Itinerary';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Itinerary/>
      // <BrowserRouter>
      //   <Switch>
      //     <Route path="/" component={Home}/>
      //     <Route path="/signup" component={SignupPage} />
      //     <Route path="/login" component={LoginPage} />
      //     <Route path="/search" component={SearchPage} />
      //   {/* <Home/> */}
      //   {/* <Login/> */}
      //   {/* <SignupPage/> */}
      //   {/* <SearchPage/> */}
      //   </Switch>
      // </BrowserRouter>
  );
}

export default App;
