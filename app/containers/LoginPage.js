import React from 'react';
import { setFlashMessage, removeFlashMessage } from '../action-creators/flash';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="row">
        <form className="col-md-6 col-md-offset-3">
          <h2>Login</h2>

          <div className="form-group">
            <input type="text" name="email" ref="email" className="form-control" placeholder="Email" />
          </div>

          <div className="form-group">
            <input type="password" name="password" ref="password" className="form-control" placeholder="Password" />
          </div>

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </div>
    );
  },
});
