import toggleAuth from '../utilities/authenticator';
import { LOGIN_USER, SET_USER } from '../constants/action-types';
import { pushPath } from 'redux-simple-router';
import setFlash from './flash';

export function signUpUser(submittedUser) {
  return (dispatch, state) => {
    toggleAuth.emailSignUp(submittedUser).then( user => {

     dispatch(setFlash('success', 'User succesfully created'));
     dispatch(pushPath('/login'));

    }).fail( resp => {
      dispatch(setFlash('danger', resp.data.errors.full_messages.join('<br/>')));

    });
  };
};

export function loginUser(loginUser) {
  return dispatch => {
    toggleAuth.emailSignIn(loginUser).then( resp => {

      dispatch(_loginUser());
      dispatch(setUser(resp.data));
      dispatch(setFlash('success', 'Succesfully loggedin'));
      dispatch(pushPath('/sandbox'));

    }).fail( resp => {
      dispatch(setFlash('danger', resp.data.errors.join('<br/>')));
    });
  };
}

export function _loginUser() {
  return { type: LOGIN_USER };
}

export function setUser(user) {
  return { type: SET_USER, user };
}
