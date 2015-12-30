import React from 'react';
import { Router, IndexRoute, Route, Link } from 'react-router';
import App from './route-handlers/Application';
import NotFound from './route-handlers/NotFound';
import Sandbox from './route-handlers/Sandbox';
import Login from './route-handlers/Login';
import Registration from './route-handlers/Registration';
import { Provider } from 'react-redux';
import store, { history } from './store';
import toggleAuth from './utilities/authenticator';

export default (
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App} >
        <IndexRoute component={Login} />
        <Route path="registration" component={Registration} />
        <Route path="sandbox" component={Sandbox} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

