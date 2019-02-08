import React, { Component } from 'react';
import HomePage from './HomePage';
import '../css/App.css';
import '../js/sidebar';
import cover from '../images/cover.jpg';
import NavBar from './HeaderComponents/Navbar';
/**
 * @classdesc App entry point
 */
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
