import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default () => {
  return (
    <div>
      <p>List Based</p>

      <Nav className="navbar fixed-bottom navbar-light bg-light">
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
