import React from 'react';
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Webpack Template</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="home" >Home</Link></li>
              <li><Link to="sandbox" >Sandbox</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
