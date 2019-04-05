// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '@babel/polyfill';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from './common/TextFieldGroup';
import { loginUser } from '../actions/authAction';
import Navbar from './HeaderComponents/Navbar';

/**
 * @classdesc Sign in users
 */
class Signin extends Component {
  /**
   * @param {props} props Representing some data passed down
   */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      userMessage: '',
      passwordMessage: ''
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
    this.setState({
      userMessage: '',
      passwordMessage: ''
    });
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if (nextProps.errors) {
      this.setState({
        userMessage: nextProps.errors.errors.message
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
   * Validates input
   * @returns {true/false} The result of validation
   */
  validate() {
    let hasError = false;

    if (this.state.username === '') {
      hasError = true;
      this.setState({
        usernameMessage: 'Username field cannot be empty'
      });
    }
    if (this.state.username.length < 3) {
      hasError = true;
      this.setState({
        userMessage: 'Username should be at least 3 charaacters long'
      });
    }

    if (this.state.password === '') {
      hasError = true;
      this.setState({
        passwordMessage: 'Password field cannot be empty'
      });
    }

    return hasError;
  }

  /**
   * Handle event change
   * @param {event} event
   * @returns {null} Returns nothing
   */
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * Handle submit event
   * @param {event} event The first number.
   * @returns {null} Returns null.
   */
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      userMessage: '',
      passwordMessage: ''
    });
    const err = this.validate();

    if (!err) {
      const { username, password } = this.state;
      const userData = {
        username,
        password
      };
      this.props.loginUser(userData);
    }
  }

  /**
   * Render web page.
   * @returns {page} The webpage
   */
  render() {
    return (
      <div>
        <div className="form col-md-12">
          <center>
            <form onSubmit={this.handleSubmit}>
              {this.state.userMessage !== '' && (
                <li className="error">{this.state.userMessage}</li>
              )}
              <TextFieldGroup
                type="text"
                name="username"
                value={this.state.username}
                placeholder="Username"
                pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                title="Enter a valid username"
                onChange={this.handleChange}
              />
              {this.state.passwordMessage !== '' && (
                <li className="error">{this.state.passwordMessage}</li>
              )}
              <TextFieldGroup
                type="password"
                placeholder="Enter Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <input type="submit" value="Sign in" />
            </form>
          </center>
        </div>
      </div>
    );
  }
}
Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Signin));
