import React from 'react';
import { removeFlashMessage } from '../../action-creators/flash';

export default React.createClass({
  propTypes: {
    flash: React.PropTypes.object.isRequired
  },
  render() {
    const { messageType, message } = this.props.flash.toJS();

    if(message) {
      return (
        <div className={`alert alert-${messageType}`} role="alert">
          {message}
        </div>
      );
    }else {
      return null;
    }
  }
});
