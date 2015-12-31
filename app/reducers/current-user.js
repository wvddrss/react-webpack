import { Map, List, fromJS } from 'immutable';
import { LOGIN_USER, LOGOUT_USER, SET_USER } from '../constants/action-types';

const initialState = Map({
  loggedIn: false,
  data: {}
});

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return state.update('data', _ => fromJS(action.user));
      break;
    case LOGIN_USER:
      return state.update('loggedIn', _ => true);
      break;
    case LOGOUT_USER:
      return state.merge(initialState);
      break;
    default:
      return state;
  }
}
