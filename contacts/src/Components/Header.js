import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
      	<Navbar.Header>
      		<Navbar.Brand>
      			Contact Manager
      		</Navbar.Brand>
      	</Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;
