import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

const NavBar = () => { // Functional component i.e stateless
        return(
            <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>                        
        </button>
        <a className="navbar-brand" href="#">My Diary</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active"><a href="index.html">Home</a></li>
            </ul>
      
        <ul className="nav navbar-nav navbar-right">

         
        </ul>
        </div>
        </div>
        </nav>
        )
    }

export default NavBar;