import React from 'react';
import { setFlashMessage, removeFlashMessage } from '../action-creators/flash';
import { Link } from 'react-router';
import LoginForm from '../components/LoginForm';

export default React.createClass({
  render() {
    return (
      <div className="row animated fadeIn">
        <LoginForm />
      </div>
    );
  },
});
