import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { loginUser } from '../action-creators/user';
import { Link } from 'react-router'

const fields = ['email', 'password'];
const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.password)
  {
    errors.password = 'Password is required';
  }

  return errors;
}

const loginForm = React.createClass({
  render() {
    const {
      fields: {email, password},
      handleSubmit,
    } = this.props;
    return (
      <div className="row animated fadeIn">
        <form className="col-md-6 col-md-offset-3" onSubmit={handleSubmit(this._handleSubmit)}>
          <h2>Login</h2>
          <div className={`form-group ${email.touched && email.error ? 'has-error' : ''}`}>
            <input type="text" name="email" ref="email" id="email" className="form-control" placeholder="Email" />
          </div>

          <div className={`form-group ${password.touched && password.error ? 'has-error' : ''}`}>

            <input type="password" name="password" ref="password" id="password" className="form-control" placeholder="Password" />

          </div>

          <input type="submit" className="btn btn-primary" value="Login" />
          <Link to="registration" className="btn btn-default">Register</Link>
        </form>
      </div>
    )
  },
  _handleSubmit(user) {
    debugger;
    this.props.dispatch(loginUser(user));
  }
});

export default reduxForm({
  form: 'login',
  fields,
  validate
})(loginForm);
