import toggleAuth from '../utilities/authenticator';
import { SET_USER } from '../constants/action-types';
import setFlash from './flash';

export function signUpUser(submittedUser) {
  return dispatch => {
    toggleAuth.emailSignUp(submittedUser).then( user => {
     dispatch(setFlash('success', 'User succesfully created'));
    }).fail( resp => {
      dispatch(setFlash('danger', resp.reason));
    });
  };
};

export function setUser(user) {
  return { action: SET_USER, user };
}
