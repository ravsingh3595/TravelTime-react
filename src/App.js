import React from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SearchPage from './Pages/SearchPage';
import {BrowserRouter} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Home/> */}
        <Login/>
        {/* <SearchPage/> */}
      </BrowserRouter>
    </div>

  );
}

export default App;
