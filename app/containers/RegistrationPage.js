import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

const RegistrationForm = React.createClass({
  render() {
    const { fields: { first_name, last_name, email, password, password_confirmation }} = this.props;

    return (
      <div className="row">

        <form className="col-md-6 col-md-offset-3" ref="form">
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
      </div>
    );
  },

  componentWillMount() {
  },

  _handleSubmit(e) {
    e.preventDefault();
    let form = this.refs.form
  }
});

export default reduxForm({
  form: 'registration',
  fields: ['first_name', 'last_name', 'email', 'password', 'password_confirmation']
})(RegistrationForm);
