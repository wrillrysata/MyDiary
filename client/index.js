import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import JwtDecode from 'jwt-decode';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authAction';

const store = configureStore();
const jsx = (
    <Provider store={store} >
    <AppRouter />
    </Provider>
);
if (localStorage.JwtToken) {
  setAuthToken(localStorage.JwtToken);
  const decoded = JwtDecode(localStorage.JwtToken);
  store.dispatch(setCurrentUser(decoded));
 

  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/';
  }
}

ReactDOM.render(jsx, document.getElementById('root'));
