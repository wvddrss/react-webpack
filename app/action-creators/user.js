import toggleAuth from '../utilities/authenticator';
import { SET_USER } from '../constants/action-types';

export function loginUser(submittedUser) {
  return dispatch => {
    toggleAuth.emailSignUp(submittedUser).then( user => {
      // SET user
      debugger;
      return setUser(user);
    }).fail( resp => {
      // Set flash message
    });
  };
};

export function setUser(user) {
  return { action: SET_USER, user };
}
