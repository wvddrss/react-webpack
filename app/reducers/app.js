import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formStateReducer } from 'redux-form';
import flashStateReducer from './flash';
import currentUserReducer from './current-user'

export default combineReducers({
  router: routerStateReducer,
  flash: flashStateReducer,
  currentUser: currentUserReducer,
  form: formStateReducer
});
