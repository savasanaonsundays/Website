import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  facebook,
  instagram,
  envelope
} from '@fortawesome/free-solid-svg-icons';

library.add(fab);

export default () => {
  return (
    <div>
      <p>List Based</p>

      <Nav className="navbar fixed-bottom navbar-light bg-light">
        <NavItem>
          <FontAwesomeIcon icon="coffee" />
          <NavLink href="#">
            <FontAwesomeIcon icon="facebook" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FontAwesomeIcon icon="instagram" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FontAwesomeIcon icon="envelope" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
