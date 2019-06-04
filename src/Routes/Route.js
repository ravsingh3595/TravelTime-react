import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// import App from '../App'
import Home from '../Pages/Home';
import LoginPage from '../Pages/Login';
import SignupPage from '../Pages/SignupPage'
// import SearchPage from '../Pages/SearchPage';
import Itinerary from '../Pages/Itinerary';
import Profile from "../Pages/Profile";
import PhotoGallery from "../Pages/PhotoGallery";

export const  Router = () => {
  return( 
  <BrowserRouter>
    <Route exact={true} path="/" component={Home}/>
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/itinerary" component={Itinerary} />
    <Route path = "/profile" component = {Profile} />
    <Route path = "/gallery" component = {PhotoGallery} />
  </BrowserRouter>
  )
}
  

