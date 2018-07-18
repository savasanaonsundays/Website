import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
//import "font-awesome/css/font-awesome.min.css";
import './footer.css';
import twitter from '../Assets/social/twitter.png';
import instagram from '../Assets/social/instagram.png';
import gmail from '../Assets/social/gmail.png';

export default () => {
  return (
    <div>
      {/*
      <Nav className="navbar bottom navbar-light bg-dark custombar">
        <NavItem>
          <NavLink
            href="https://www.facebook.com/savasanaonsundays/"
            target="_blank"
          >
            <img className="socialimg" src={twitter} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://www.instagram.com/savasanaonsundays/"
            target="_blank"
          >
            <img className="socialimg" src={instagram} />
          </NavLink>
        </NavItem>
        <NavItem>
          <Link to="../">
            <img className="socialimg" src={gmail} />
          </Link>
        </NavItem>
      </Nav>
*/}
      <footer className="navbar bottom bg-info text-white p-9 text-center">
        <a href="https://www.facebook.com/savasanaonsundays/" target="_blank">
          <img className="socialimg" src={twitter} />
        </a>
        <a href="https://www.instagram.com/savasanaonsundays/" target="_blank">
          <img className="socialimg" src={instagram} />
        </a>
        <Link to="../">
          <img className="socialimg" src={gmail} />
        </Link>
        Copyright &copy; {new Date().getFullYear()} Savasana on Sundays
      </footer>
    </div>
  );
};
