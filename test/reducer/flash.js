import flashStateReducer from '../../app/reducers/flash';
import { setFlashMessage, removeFlashMessage } from '../../app/action-creators/flash';
import { Map } from 'immutable';
import { expect } from 'chai';

describe('flashStateReducer', () => {
  it('has an initialstate', () => {
    const initialState = flashStateReducer(undefined, {});

    const expectedState = Map({
      messageType: null,
      message: null
    });

    expect(initialState).to.equal(expectedState);
  });


  describe('when given action creator', () => {
    it('SET_FLASH_MESSAGE it sets flash message', () => {
      const messageType = 'danger';
      const message = 'Robots rock!';

      const state = flashStateReducer(undefined, setFlashMessage(messageType, message));

      const expectedState = Map({
        messageType,
        message
      });

      expect(state).to.equal(expectedState);
    });

    it('REMOVE_FLASH_MESSAGE it removes flash message', () => {
      const messageType = 'danger';
      const message = 'Robots rock!';

      let state = Map({
        messageType,
        message
      });

      state = flashStateReducer(state, removeFlashMessage());

      const expectedState = Map({
        messageType: null,
        message: null
      });

      expect(state).to.equal(expectedState);
    });
  });
});
