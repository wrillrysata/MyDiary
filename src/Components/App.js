import React, { Component } from 'react';
import HomePage from './HomePage';
import '../css/App.css';
import cover from '../images/cover.jpg';
import NavBar from './HeaderComponents/Navbar';

class App extends Component {
  render() {
    return (
      <div>
       <HomePage />
       </div>
       
    );
  }
}

export default App;
