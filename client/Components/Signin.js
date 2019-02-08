// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import '@babel/polyfill';
import { withRouter } from 'react-router-dom';
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
      usernameMessage: '',
      passwordMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
 * Validates input
 * @returns {true/false} The result of validation
 */
  validate() {
    let isError = false;


    if (this.state.username === '') {
      isError = true;
      this.setState({
        usernameMessage: 'Username field cannot be empty'
      });
    }
    if (this.state.username.length < 3) {
      isError = true;
      this.setState({
        usernameMessage: 'Username should be at least 3 charaacters long'
      });
    }

    if (this.state.password === '') {
      isError = true;
      this.setState({
        passwordMessage: 'Password field cannot be empty'
      });
    }

    return isError;
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
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      usernameMessage: '',
      passwordMessage: ''
    });
    const err = this.validate();

    if (!err) {
      const { username, password } = this.state;
      console.log(this.state);
      // use fetch api to login;
      fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
        .then((response) => {
          if (response.status === 200) {
            this.props.history.push('/dashboard');
          } else if (response.status === 401) {
            this.setState({
              usernameMessage: 'Incorrect username or password'
            });
          } else if (response.status === 404) {
            this.setState({
              usernameMessage: 'We couldn\'t find a user with that record'
            });
          }
        });
    }
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
              <ul className="error">


              </ul>
              {this.state.usernameMessage !== '' && (
                  <li className="error">{this.state.usernameMessage}</li>
              )}
              <input
                type="text"
                name="username"
                placeholder="Username"
                pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                title="Enter a valid username"
                onChange={event => this.handleChange(event)}
              />
              {this.state.passwordMessage !== '' && (
                  <li className="error">{this.state.passwordMessage}</li>
              )}
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={event => this.handleChange(event)}
              />
              <input type="submit" value="Sign in" />
            </form>
          </center>
        </div>
      </div>
    );
  }
}
export default withRouter(Signin);
