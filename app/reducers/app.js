import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import flashStateReducer from './flash';

export default combineReducers({
  router: routerStateReducer,
  flash: flashStateReducer
});
