import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../Components/HomePage';
import Signin from '../Components/Signin';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/signin" component={Signin} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;
