import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';

class Navbar extends Component {
  constructor(props){
    super(props)
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }
  /**
   * @param {event} event
   * @returns { null} null
   */
  onLogoutClick(event) {
    event.preventDefault();
   this.props.logoutUser(this.props.history);
  }
  componentDidMount(){
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
  render() {
    return (

        <div>
          <div id="Sidenav" className="sidenav">
          <span id="close">&times;</span>
          <Link to="/dashboard">Home</Link>
  
          <Link to="/profile">My profile</Link>
          <a href=""
          onClick = {this.onLogoutClick } >
          Logout
          </a>
        </div>
         <nav className="navbar navbar-inverse">
         <div className="container-fluid">
           <div className="navbar-header">
             <Link to="/" className="navbar-brand">My Diary</Link>
             <a className="navbar-brand" id="hamburger">&#9776;</a>
           </div>
         </div>
       </nav>
       </div>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps,{logoutUser})(withRouter(Navbar));