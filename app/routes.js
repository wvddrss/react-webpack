import React from 'react';
import { Router, Route, Link } from 'react-router';
import App from './route-handlers/Application';
import Home from './route-handlers/Home';
import NotFound from './route-handlers/NotFound';
import Sandbox from './route-handlers/Sandbox';
import { Provider } from 'react-redux';
import store from './store';

export default (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} >
        <Route path="home" component={Home} />
        <Route path="sandbox" component={Sandbox} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

