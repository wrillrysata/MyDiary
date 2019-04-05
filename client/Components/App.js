import React, { Component, Fragment } from "react";
import HomePage from "./HomePage";
import "../css/App.css";
import "../js/sidebar";
import cover from "../images/cover.jpg";
import NavBar from "./HeaderComponents/Navbar";
/**
 * @classdesc App entry point
 */
class App extends Component {
  render() {
    return (
    <Fragment>
      <HomePage />
    </Fragment>
    );
  }
}

export default App;
