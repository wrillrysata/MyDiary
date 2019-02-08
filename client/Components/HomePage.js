import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const HomePage = props => (
    <div className="main">
                <div className="cover flex">
                <div className="center">
          <h1>My Diary</h1><br />
          <p>A safe space for your thoughts</p>
        <Link to="/signup"><button className="btn" >Sign up</button></Link>
        <Link to="/signin"> <button className="btn" >Sign in</button></Link>
          </div>
          </div>
          </div>
);


export default HomePage;
