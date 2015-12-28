import { SET_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../constants/action-types';

export function setFlashMessage(messageType, message) {
  return { type: SET_FLASH_MESSAGE, messageType, message};
}

export function removeFlashMessage() {
  return { type: REMOVE_FLASH_MESSAGE };
}
