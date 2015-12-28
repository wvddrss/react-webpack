import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Alert from '../../../app/components/shared/Alert';
import { expect } from 'chai';
import { Map } from 'immutable';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } = ReactTestUtils;

describe('Alert', () => {
  describe('when message given', () => {
    it('renders an alert-box when a message is set', () => {
      const componentState = Map({
        messageType: 'danger',
        message: 'Robots rock!'
      });

      const component = renderIntoDocument(<Alert flash={componentState} />)

      const [alert] = scryRenderedDOMComponentsWithTag(component, 'div');

      expect(alert.textContent).to.equal('Robots rock!');
    });

    it('renders with a className property', () => {
      const componentState = Map({
        messageType: 'danger',
        message: 'Robots rock!'
      });

      const component = renderIntoDocument(<Alert flash={componentState} />)

      const [alert] = scryRenderedDOMComponentsWithTag(component, 'div');

      expect(alert.className).to.equal('alert alert-danger');
    });
  });

  describe('when no message set', () => {
    it('renders nothing', () => {
      const componentState = Map({
        messageType: '',
        message: ''
      });

      const component = renderIntoDocument(<Alert flash={componentState} />)

      const [alert] = scryRenderedDOMComponentsWithTag(component, 'div');

      expect(alert).to.equal(undefined);
    });
  });
});
