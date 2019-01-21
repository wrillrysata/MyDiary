import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => { // Functional component i.e stateless
        return(
            <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
        <a class="navbar-brand" href="#">My Diary</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li class="active"><a href="index.html">Home</a></li>
            </ul>
      
        <ul class="nav navbar-nav navbar-right">

          <li><Link to="/api/v1/auth/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </ul>
        </div>
        </div>
        </nav>
        )
    }

export default NavBar;