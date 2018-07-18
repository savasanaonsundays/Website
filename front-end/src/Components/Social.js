import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import './social.css';

export default () => {
  return (
    <div>
      <Nav className="navbar fixed-bottom navbar-light bg-light custombar">
        <NavItem>
          <NavLink href="#">
            <i className="fa fa-facebook-official fa-2x" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i className="fa fa-instagram fa-2x" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i className="fa fa-send fa-2x" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
