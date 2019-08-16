import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';


import App from '../App'
// import Home from '../Pages/Home';
import LoginPage from '../Pages/Login';
import SignupPage from '../Pages/SignupPage'
import SearchPage from '../Pages/SearchPage';
import Itinerary from '../Pages/Itinerary';
import Profile from "../Pages/Profile";
import BookingPage from "../Pages/BookingPage";
import GalleryPage from '../Pages/GalleryPage';
import EnsureLoggedInContainer from '../Routes/EnsureLoggedInContainer'

export const  Router = () => {
  return( 
  <BrowserRouter>
      <Route exact={true} path="/" component={App}/>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/itinerary" component={Itinerary} />
      <Route path = "/gallery" component = {GalleryPage} />
      <Route path = "/searchPage" component = {SearchPage} />

      <Route component={EnsureLoggedInContainer}>
        <Route path="/booking" component={BookingPage}/>
        <Route path = "/profile" component = {Profile} />
      </Route>
      
  </BrowserRouter>
  )
}
  

