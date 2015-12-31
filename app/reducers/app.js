import { combineReducers } from 'redux';
import { reducer as formStateReducer } from 'redux-form';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import flashStateReducer from './flash';

export default combineReducers({
  routing: routeReducer,
  flash: flashStateReducer,
  form: formStateReducer
});
