import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import routes from './Routes/Route';

const store = createStore(
    (state = {}) => state,
      applyMiddleware(thunk)
  );

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import { render } from 'react-dom';
// import rootReducer from './rootReducer';
// import setAuthorizationToken from './utils/setAuthorizationToken';
// import jwtDecode from 'jwt-decode';
// import { setCurrentUser } from './actions/authActions';


// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// );

// if (localStorage.jwtToken) {
//   setAuthorizationToken(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
// }

// render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>, document.getElementById('app'));
