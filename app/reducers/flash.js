import { Map, List } from 'immutable';
import { SET_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../constants/action-types';

const initialState = Map({
  messageType: null,
  message: null
});

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_FLASH_MESSAGE:
      const alert = Map({
        messageType: action.messageType,
        message: action.message
      });
      return state.merge(alert);
      break;
    case REMOVE_FLASH_MESSAGE:
      return initialState;
      break;
    default:
      return state;
  }
}
