import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { loginUser } from '../action-creators/user';
import { Link } from 'react-router';
import Alert from './shared/Alert';

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
      <div className='row animated fadeIn'>
        <form className='col-md-6 col-md-offset-3' onSubmit={handleSubmit(this._handleSubmit)}>
          <h2>Login</h2>

          <Alert flash={this.props.flash} />

          <div className={`form-group `}>

            {email.touched && email.error && <label className='control-label' forHtml='email'>{email.error}</label>}

            <input type='text' name='email' ref='email' id='email' className='form-control' placeholder='Email' {...email} />
          </div>

          <div className={`form-group`}>

            {password.touched && password.error && <label className='control-label' forHtml='password'>{password.error}</label>}

            <input type='password' name='password' ref='password' id='password' className='form-control' placeholder='Password' {...password} />
          </div>

          <input type='submit' className='btn btn-primary' value='Login' />
          <Link to='registration' className='btn btn-default'>Register</Link>
        </form>
      </div>
    )
  },
  _handleSubmit(user) {
    this.props.dispatch(loginUser(user));
  }
});

export default reduxForm({
  form: 'loginForm',
  fields,
  validate
})(loginForm);
