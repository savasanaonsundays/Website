import React from 'react';
import './footer.css';
import logo from '../Assets/navbar/logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { logoutAdmin } from '../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './navbar.css';

class Navman extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutAdmin();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar
          className="navbar sticky-top"
          light
          bsStyle
          expand="sm"
          id="navynavy"
        >
          <NavbarBrand href="/">
            <img src={logo} className="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navtext" href="/pricing">
                  Pricing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navtext" href="/components/">
                  Class Timetable
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navtext" href="/bookingform">
                  Private Booking
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="navtext"
                  href="https://medium.com/@savasanaonsundaysyoga"
                >
                  Oil Store
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navtext" href="/aboutme">
                  About Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Navman.propTypes = {
  logoutAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutAdmin }
)(Navman);
