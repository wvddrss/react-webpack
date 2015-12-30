import React from 'react';
import { reduxForm } from 'redux-form';
import RegistrationForm from '../components/RegistrationForm';

export default React.createClass({
  render() {
    return (
      <div className="row">
        <RegistrationForm />
      </div>
    );
  },
});
