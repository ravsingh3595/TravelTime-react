import React from 'react';
import { Route } from 'react-router-dom';

import App from '../App'
// import Home from '../Pages/Home';
import LoginPage from '../Pages/Login';
import SignupPage from '../Pages/SignupPage'
import SearchPage from '../Pages/SearchPage';

// import App from './components/App';
// import Greetings from './components/Greetings';
// import SignupPage from './components/signup/SignupPage';
// import LoginPage from './components/login/LoginPage';
// import NewEventPage from './components/events/NewEventPage';

// import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="search" component={SearchPage} />
  </Route>
)
