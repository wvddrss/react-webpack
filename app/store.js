import rootReducer from './reducers/app';
import routes from './routes';
import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware, compose } from 'redux';
import { createHistory } from 'history';
import { createStore } from 'redux';
import { devTools } from 'redux-devtools';
import { syncReduxAndRouter } from 'redux-simple-router';

const store = compose(
  applyMiddleware(thunk),
  devTools()
)(createStore)(rootReducer);

const history = createHistory()

syncReduxAndRouter(history, store)

export default store;
