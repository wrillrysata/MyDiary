import React, { Component } from 'react';
import JwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import EntryList from './EntryList';
import { getNotes, saveNote } from '../actions/entryAction';
import { logoutUser } from '../actions/authAction';
/**
 * @classdesc Sign in users
 */
class UserDashboard extends Component {
  /**
 * @param {props} props Representing some data passed down
 */
  constructor(props) {
    super(props);
    this.state = {
      note: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addNote = this.addNote.bind(this);
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

  /**
   * @param {event} event
   * @returns { null} null
   */
  addNote(event) {
    event.preventDefault();
    this.props.saveNote(this.state.note);
  }

  /**
   * @param {event} event
   * @returns { null} null
   */
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /** Lifecycle method - After component mounts
   * @param {null} null
   * @returns { null} null
   */
  componentDidMount() {
    this.props.getNotes();
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
  render() {
    return (

      <div>
          <div id="Sidenav" className="sidenav">
        <span id="close">&times;</span>
        <Link to="/">Home</Link>
        <Link to="/dashboard">All notes</Link>

        <a href="userprofile.html">My profile</a>
        <a href=""
        onClick = {this.onLogoutClick } >
        Logout
        </a>
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
                <form onSubmit={ this.addNote } >
                    <textarea placeholder="What's on your mind?" cols="30" rows="5" name="note" onChange={event => this.handleChange(event)} ></textarea>
                 <br /><input type="submit" value="Add New" className="save" />
                </form>
                </div>


                 </div>

                 <center><h3 className="clearfix">Recent Notes</h3></center>
                 <hr />
                 <div className="container fluid">
                 <EntryList entries={ this.props.entries } />
            </div>

      </div>
    );
  }
}
UserDashboard.propTypes = {
  getNotes: PropTypes.func.isRequired,
  saveNote: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired

};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  entries: state.entries
});

export default connect(mapStateToProps,
  { logoutUser, getNotes, saveNote })(withRouter(UserDashboard));
