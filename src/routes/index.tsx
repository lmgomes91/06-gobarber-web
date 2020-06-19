import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';
import SignUp from '../pages/SignUp';
import SignIN from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../pages/Dashboard';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIN} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default routes;
