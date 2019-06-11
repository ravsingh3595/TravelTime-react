import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './rootReducer';

import {Router} from './Routes/Route';


const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      // window.devToolsExtension ? window.devToolsExtension() : f => f
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      // + window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
