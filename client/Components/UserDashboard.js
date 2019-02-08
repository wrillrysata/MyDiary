/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * @classdesc Sign in users
 */
class UserDashboard extends Component {
  /**
 * @param {props} props Representing some data passed down
 */
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.hamburger = document.getElementById('hamburger');
    this.close = document.getElementById('close');
    this.menu = document.getElementById('Sidenav');
    this.close.addEventListener('click', () => {
      this.menu.style.width = 0;
    });
    this.hamburger.addEventListener('click', () => {
      this.menu.style.width = '200px';
    });
  }


  /**
 *Renders web page
 * @returns {Webpage} Displays the webpage
 */
  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line require-jsdoc
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
          <div id="Sidenav" className="sidenav">
        <span id="close">&times;</span>
        <Link to="/">Home</Link>
        <Link to="/dashboard">All notes</Link>

        <a href="userprofile.html">My profile</a>
        <a href="logout.html">Logout</a>
      </div>
      <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">My Diary</a>
                <a className="navbar-brand" id="hamburger">&#9776;</a>
              </div>
            </div>
          </nav>
          <div className="container fluid">
                <div className="col-md-12">
                    <textarea placeholder="What's on your mind?" cols="30" rows="5"></textarea>
                 <br /><input type="submit" value="Add New" className="save" />
                 </div>


                 </div>

                 <center><h3 className="clearfix">Recent Notes</h3></center>
                 <hr />
                 <div className="container fluid">
            <div className="well">
             <p>Lorem ispum dit amet
                    Lorem ispum dit amet
                    Lorem ispum dit amet
                    Lorem ispum dit amet...<a href="note.html">More</a>
             </p>
             <hr />
             <span id="date">Wed June 5</span>

            </div>
            <div className="well">
             <p>Lorem ispum dit amet
                    Lorem ispum dit amet
                    Lorem ispum dit amet
                    Lorem ispum dit amet...<a href="note.html">More</a>
             </p>
             <hr />
             <span id="date">Wed June 5</span>

            </div>
            </div>

      </div>
    );
  }
}
export default UserDashboard;
