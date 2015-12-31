import React from 'react';
import LoginForm from '../components/LoginForm';

export default React.createClass({
  render() {
    return (
      <div className="row animated fadeIn">
        <LoginForm flash={this.props.flash} />
      </div>
    );
  },
});
