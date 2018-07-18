import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import './social.css';
import twitter from '../Assets/social/twitter.png';
import instagram from '../Assets/social/instagram.png';
import gmail from '../Assets/social/gmail.png';

export default () => {
  return (
    <div>
      <Nav className="navbar bottom navbar-light bg-dark custombar">
        <NavItem>
          <NavLink href="#">
            <img className="socialimg" src={twitter} />
            {/* <i className="fa fa-facebook-official fa-2x" /> */}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <img className="socialimg" src={instagram} />
            {/* <i className="fa fa-instagram fa-2x" /> */}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <img className="socialimg" src={gmail} />
            {/* <i className="fa fa-send fa-2x" /> */}
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
