import { expect } from 'chai';
import { setFlashMessage, removeFlashMessage } from '../../app/action-creators/flash';
import { SET_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE } from '../../app/constants/action-types';

describe('flashActionCreator', () => {
  describe('#setFlashMessage', () => {
    it('returns an action creator object', () => {
      const messageType = 'danger'
      const message = 'Robots are taking over!';
      const result = setFlashMessage(messageType, message);

      const expectedResult = {
        type: SET_FLASH_MESSAGE,
        messageType,
        message
      }

      expect(result).to.deep.equal(expectedResult);
    });
  });

  describe('#removeFlashMessage', () => {
    it('returns an action creator object', () => {
      const type = REMOVE_FLASH_MESSAGE;

      const result = removeFlashMessage();
      const expectedResult = { type: REMOVE_FLASH_MESSAGE };

      expect(result).to.deep.equal(expectedResult);
    });
  });
});
