import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../Components/NotFoundPage';
import UserDashboard from '../Components/UserDashboard';
import HomePage from '../Components/HomePage';
import Signin from '../Components/Signin';
import Signup from '../Components/Signup';
import EditComponent from '../Components/EditComponent';


const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={UserDashboard} />
      <Route path="/edit/:id" component={EditComponent} />
       <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;
