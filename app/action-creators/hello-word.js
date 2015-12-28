import { ADD_TEXT_HELLO_WORLD } from '../constants/action-types';

export function addTextToHelloWorld(text) {
  return { type: ADD_TEXT_HELLO_WORLD, text };
}

// Async example made possible by redux-thunk middleware.
// Prefer usage of libraries with PROMISES enabled.
export function asyncAddTextToHelloWorld(text) {
  return dispatch => {
    $.get('myapi.com', (data) => {
      dispatch(addTextToHelloWorld(data.text));
    });
  };
}
