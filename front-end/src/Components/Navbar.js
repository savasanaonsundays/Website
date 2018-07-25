import React from 'react';

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
        <Navbar className="navbar sticky-top" light expand="md" id="navynavy">
          <NavbarBrand href="/">Savasana on Sundays</NavbarBrand>
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

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Menu
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Private Lessons</DropdownItem>
                  <DropdownItem>Class Timetable</DropdownItem>
                  <DropdownItem>Massage</DropdownItem>
                  <DropdownItem href="https://www.mydoterra.com/savasanaonsundays/#/">
                    Oilstore
                  </DropdownItem>
                  <DropdownItem href="/aboutme">About Us</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Close</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
