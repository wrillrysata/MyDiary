import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validator from '../helpers/validator';
import { registerUser } from '../actions/authAction';
import Navbar from './HeaderComponents/Navbar';
import '../css/App.css';


/**
 * @classdesc Sign in users
 */
class Signup extends Component {
  /**
 * @param {props} props Representing some data passed down
 */
  constructor(props) {
    super();
    this.state = {
      email: '',
      mailError: '',
      username: '',
      userError: '',
      password: '',
      passError: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
 * Lifecycle method to checks if a prop is present
 * @param {nextProps} nextProps
 * @returns {null} Returns null
 */
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        userError: nextProps.errors.errors.message
      });
    }
  }

  /**
 * Lifecycle method - after component mounts
 * @param {null} null
 * @returns {null} Returns nothing
 */
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  /**
 * Handle submit event
 * @param {event} event
 * @returns {null} Returns nothing
 */
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      mailError: '',
      userError: '',
      passError: '',

    });
    const userData = {
      userName: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    const error = validator(userData);
    const hasError = Object.keys(error).length;
    if (hasError > 0) {
      const { userError, mailError, passError, } = error;
      this.setState({
        userError,
        mailError,
        passError
      });
    } else {
      this.props.registerUser(userData, this.props.history);
    }
  }


  /**
 * Handle update
 * @param {event} event
 * @returns {null} Returns nothing
 */
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value

    });
  }


  /**
 * Render web page.
 * @returns {page} The webpage
 */
  render() {
    return (
            <div>
            <Navbar />


     <div className="form col-md-12">
    <center>
     <form onSubmit={this.handleSubmit}>
      {this.state.userError && <p className="error">{this.state.userError}</p>}
      {this.state.mailError !== '' && <p className="error">{this.state.mailError}</p>}
      {this.state.passError !== '' && <p className="error">{this.state.passError}</p>}
      <input type="text" name="username" placeholder="Username" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" title="Enter a valid username" onChange={event => this.handleChange(event)} />

     <input type="text" name="email" placeholder="Enter mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Enter a valid email" onChange={event => this.handleChange(event)} />

     <input type="password" name="password" placeholder="Enter Password" onChange={event => this.handleChange(event)} />

    <input type="submit" value="Signup" />
    </form>
    </center>
               </div>
            </div>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired

};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { registerUser })(withRouter(Signup));
