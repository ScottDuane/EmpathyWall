import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Navbar extends Component {
  render () {
    return (
      <div className="navbar-wrapper">
        <ul className="navbar-class">
          <li><img className="icon" src="assets/question.svg" /></li>
          <li><img className="icon" src="assets/github.svg" /></li>
          <li><img className="icon" src="assets/mail-black-envelope-symbol.svg" /></li>
          <li><img className="icon" src="assets/linkedin-logo.svg" /></li>
        </ul>
      </div>);
  };
};

export default Navbar;
