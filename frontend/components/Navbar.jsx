import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Navbar extends Component {
  render () {
    return (
      <div className="navbar-wrapper">
        <ul className="navbar-class">
          <li>About</li>
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
      </div>);
  };
};

export default Navbar;
