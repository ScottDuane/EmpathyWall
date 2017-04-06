import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Navbar extends Component {
  render () {
    return (
      <div className="navbar-wrapper">
        <ul className="navbar-class">
          <li><a href="http://www.linkedin.com/in/sduane"><img className="icon" src="public/images/linkedin-logo.svg" /></a></li>
          <li><a href="http://www.github.com/ScottDuane"><img className="icon" src="https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-218768822416/assets/github.svg" /></a></li>
          <li><a href="mailto:adrian.scott.duane@gmail.com"><img className="icon" src="https://s3-us-west-1.amazonaws.com/scottduanerails/assets/mail-black-envelope-symbol.svg" /></a></li>
        </ul>
      </div>);
  };
};

export default Navbar;
