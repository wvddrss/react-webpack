import { Map, List } from 'immutable';
import { LOGIN_USER, LOGOUT_USER, SET_USER } from '../constants/action-types';

const initialState = Map({
  loggedIn: false,
  data: {}
});

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      // Set state data to user
      break;
    case LOGIN_USER:
      return state;
      break;
    case LOGOUT_USER:
      return state;
      break;
    default:
      return state;
  }
}
