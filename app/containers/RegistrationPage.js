import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

export default React.createClass({
  render() {
    return (
      <div className='row animated fadeIn'>
        <RegistrationForm flash={this.props.flash} />
      </div>
    );
  },
});