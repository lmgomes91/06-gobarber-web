import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';
import SignUp from '../pages/SignUp';
import SignIN from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIN} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default routes;
