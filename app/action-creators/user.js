import toggleAuth from '../utilities/authenticator';
import { SET_USER } from '../constants/action-types';
import { pushPath } from 'redux-simple-router';
import setFlash from './flash';

export function signUpUser(submittedUser) {
  return (dispatch, state) => {
    toggleAuth.emailSignUp(submittedUser).then( user => {

     dispatch(setFlash('success', 'User succesfully created'));
     dispatch(pushPath('/'));

    }).fail( resp => {

      dispatch(setFlash('danger', resp.data.errors.full_messages.join('<br/>')));

    });
  };
};

export function loginUser(loginUser) {
  return dispatch => {
    debugger;
  };
}

export function setUser(user) {
  return { action: SET_USER, user };
}
