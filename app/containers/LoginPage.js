import React from 'react';
import { setFlashMessage, removeFlashMessage } from '../action-creators/flash';
import { Link } from 'react-router';
import LoginForm from '../components/LoginForm';
import Alert from '../components/shared/Alert';

export default React.createClass({
  render() {
    return (
      <div className="row animated fadeIn">
        <Alert {...this.props} />
        <LoginForm />
      </div>
    );
  },
});
