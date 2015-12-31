import React from 'react';
import { Router, IndexRoute, Route, Link } from 'react-router';
import App from './route-handlers/Application';
import NotFound from './route-handlers/NotFound';
import Sandbox from './route-handlers/Sandbox';
import { Provider } from 'react-redux';
import store, { history } from './store';

export default (
  <Provider store={store}>
    <Router history={history} >
      <Route path='/' component={App}>
        <IndexRoute component={Sandbox} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
);
