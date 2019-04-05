import axios from 'axios';
import JwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

// eslint-disable-next-line import/prefer-default-export
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/v1/auth/signup', userData)
    .then(response => history.push('/signin'))
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    });
};
// Set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});
// Login user - Get Token
export const loginUser = userData => (dispatch) => {
  axios
    .post('/api/v1/auth/login', userData)
    .then((response) => {
      // Get token and save to localstorage
      const { token } = response.data;
      localStorage.setItem('JwtToken', token);
      // set Token with every request user makes
      setAuthToken(token);
      // Decode token to get user data
      const decoded = JwtDecode(token);
      // Set logged in user
      dispatch(setCurrentUser(decoded));
    })
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    });
};
// Logout user and reset state
export const logoutUser = history => (dispatch) => {
// Remove token from localstorage
  localStorage.removeItem('JwtToken');
  dispatch(setCurrentUser({}));
  // Remove token from future requests
  setAuthToken(false);
  window.location.href = '/';
};
