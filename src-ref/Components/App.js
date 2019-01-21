import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
require('../css/main.css');

const App = () => {
    return (
     <Router>
       <div>
         <NavBar />
         <Route name="home" exact path="/" component={ Homepage } />
       </div>
     </Router>
    )
  }
export default App;


