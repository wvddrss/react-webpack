import rootReducer from './reducers/app';
import routes from './routes';
import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware, compose } from 'redux';
import { createHistory } from 'history';
import { createStore } from 'redux';
import { devTools } from 'redux-devtools';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';

export default compose(
  applyMiddleware(thunk),
  reduxReactRouter({
    routes,
    createHistory
  }),
  devTools()
)(createStore)(rootReducer);
