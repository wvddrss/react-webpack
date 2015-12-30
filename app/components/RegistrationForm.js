import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { signUpUser } from '../action-creators/user';
import { Link } from 'react-router'
import Alert from './shared/Alert';

const fields = ['first_name', 'last_name', 'email', 'password', 'password_confirmation'];
const validate = values => {
  const errors = {};

  if(!values.first_name) {
    errors.first_name = 'First name is required'
  }

  if(!values.last_name) {
    errors.last_name = 'Last name is required'
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.password)
  {
    errors.password = 'Password is required';
  }


  if(!values.password_confirmation)
  {
    errors.password_confirmation = 'Password confirmation is required';
  }
  else if(values.password != values.password_confirmation) {
    errors.password_confirmation = 'Password confirmation must match password'
  }

  return errors;
}

const registrationForm = React.createClass({
  render() {

    const {
      fields: {first_name, last_name, email, password, password_confirmation },
      handleSubmit,
    } = this.props;

    return (
      <form className='col-md-6 col-md-offset-3' onSubmit={handleSubmit(this._handleSubmit)}>
        <h2>Registration</h2>
        <div className={`form-group ${first_name.touched && first_name.error ? 'has-error' : ''}`}>
          <Alert flash={this.props.flash} />

          {first_name.touched && first_name.error && <label className='control-label' forHtml='first_name'>{first_name.error}</label>}

          <input name='first_name' className='form-control' placeholder='First name' id='first_name' {...first_name} />
        </div>

        <div className={`form-group ${last_name.touched && last_name.error ? 'has-error' : ''}`}>

          {last_name.touched && first_name.error && <label className='control-label' forHtml='last_name'>{last_name.error}</label>}

          <input name='last_name' className='form-control' placeholder='Last name' id='last_name' {...last_name} />
        </div>

        <div className={`form-group ${email.touched && email.error ? 'has-error' : ''}`}>

          {email.touched && email.error && <label className='control-label' forHtml='email'>{email.error}</label>}

          <input type='text' name='email' ref='email' className='form-control' id='email' placeholder='Email' {...email} />
        </div>

        <div className={`form-group ${password.touched && password.error ? 'has-error' : ''}`}>

          {password.touched && password.error && <label className='control-label' forHtml='password'>{password.error}</label>}

          <input type='password' name='password' ref='password' className='form-control' id='password' placeholder='Password' {...password} />
        </div>

        <div className={`form-group ${password_confirmation.touched && password_confirmation.error ? 'has-error' : ''}`}>

          {password_confirmation.touched && password_confirmation.error && <label className='control-label' forHtml='password_confirmation'>{password_confirmation.error}</label>}

          <input type='password' name='password_confirmation' ref='password_confirmation' className='form-control' id='password_confirmation' placeholder='Password Confirmation' {...password_confirmation} />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
        <Link to="/login" className="btn btn-default">Back</Link>
      </form>
    )
  },
  _handleSubmit(user) {
    this.props.dispatch(signUpUser(user));
  }
});

export default reduxForm({
  form: 'registration',
  fields,
  validate
})(registrationForm);
