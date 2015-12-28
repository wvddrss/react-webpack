import React from 'react';
import { setFlashMessage, removeFlashMessage } from '../action-creators/flash';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="row">
        <form className="col-md-6 col-md-offset-3">
          <h2>Registration</h2>

          <div className="form-group">
            <input type="text" name="first_name" ref="first_name" className="form-control" placeholder="First name" />
          </div>

          <div className="form-group">
            <input type="text" name="last_name" ref="last_name" className="form-control" placeholder="Last Name" />
          </div>

          <div className="form-group">
            <input type="text" name="email" ref="email" className="form-control" placeholder="Email" />
          </div>

          <div className="form-group">
            <input type="password" name="password" ref="password" className="form-control" placeholder="Password" />
          </div>

          <div className="form-group">
            <input type="password_confirmation" name="password_confirmation" ref="password_confirmation" className="form-control" placeholder="Password Confirmation" />
          </div>

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </div>
    );
  },
});
