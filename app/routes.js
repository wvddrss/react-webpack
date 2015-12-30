import React from 'react';
import { Router, Route, Link } from 'react-router';
import App from './route-handlers/Application';
import NotFound from './route-handlers/NotFound';
import Sandbox from './route-handlers/Sandbox';
import Login from './route-handlers/Login';
import Registration from './route-handlers/Registration';
import { Provider } from 'react-redux';
import store from './store';
import toggleAuth from './utilities/authenticator';

var test = store;

export default (
  <Provider store={store}>
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/" component={App} >
        <Route path="registration" component={Registration} />
        <Route path="sandbox" component={Sandbox} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

