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
      <Route path='/login' component={Login} />
      <Route path='/registration' component={Registration} />
      <Route path='/' component={App} onEnter={requireAuth}>
        <IndexRoute component={Sandbox} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

function requireAuth(nextState, transition) {
  if(!store.getState().currentUser.get('loggedIn')) {
    transition('', '/login', '');
  }
}
