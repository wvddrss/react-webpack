import React from 'react';
import { setFlashMessage, removeFlashMessage } from '../action-creators/flash';

export default React.createClass({
  render() {
    return (
      <h1>Home</h1>
    );
  },
  componentDidMount() {
    this.props.dispatch(setFlashMessage('danger', 'This is a message from me to you. Redux rocks!'));

  }
});
