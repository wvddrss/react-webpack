import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import { signUpUser } from '../action-creators/user';

const fields = ['first_name', 'last_name', 'email', 'password', 'password_confirmation'];
const validate = values => {
  const errors = {};

  if(!values.first_name) {
    errors.first_name = "First name is required"
  }

  if(!values.last_name) {
    errors.first_name = "Last name is required"
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.password == values.password_confirmation) {
    errors.password_confirmation = 'Password confirmation must match password'
  }

  return errors;
}

const registrationForm = React.createClass({
  render() {
    const {
      fields: {first_name, last_name, email, password, password_confirmation },
      resetForm,
    } = this.props;
    return (
      <form className="col-md-6 col-md-offset-3" onSubmit={this._handleSubmit}>
        <h2>Registration</h2>
        <div className="form-group">
          <input name="first_name" className="form-control" placeholder="First name" {...first_name} />
        </div>

        <div className="form-group">
          <input name="last_name" className="form-control" placeholder="Last name" {...last_name} />
        </div>

        <div className="form-group">
          <input type="text" name="email" ref="email" className="form-control" placeholder="Email" {...email} />
        </div>

        <div className="form-group">
          <input type="password" name="password" ref="password" className="form-control" placeholder="Password" {...password} />
        </div>

        <div className="form-group">
          <input type="password" name="password_confirmation" ref="password_confirmation" className="form-control" placeholder="Password Confirmation" {...password_confirmation} />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
    )
  },
  _handleSubmit(e) {
    e.preventDefault();
    const formValues = this.props.values;
    this.props.dispatch(signUpUser(formValues));
  }
});

export default reduxForm({
  form: 'registration',
  fields,
  validate
})(registrationForm);
