import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';


import App from '../App'
// import Home from '../Pages/Home';
import LoginPage from '../Pages/Login';
import SignupPage from '../Pages/SignupPage'
// import SearchPage from '../Pages/SearchPage';
import Itinerary from '../Pages/Itinerary';
import Profile from "../Pages/Profile";
import PhotoGallery from "../Pages/PhotoGallery";
import BookingPage from "../Pages/BookingPage";

export const  Router = () => {
  return( 
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={App}/>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/itinerary" component={Itinerary} />
      <Route path="/booking" component={BookingPage}/>
      <Route path = "/profile" component = {Profile} />
      <Route path = "/gallery" component = {PhotoGallery} />
    </div>
  </BrowserRouter>
  )
}
  

