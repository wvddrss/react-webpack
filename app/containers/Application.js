import React from 'react';
import Navigation from '../components/shared/Navigation';
import Alert from '../components/shared/Alert';

export default React.createClass({
  render() {
    return (
      <div>
        <Navigation />

        <div style={{paddingTop: '60px'}} className="container">
          <Alert {...this.props} />
          {this.props.children}
        </div>
      </div>
    );
  }
})
