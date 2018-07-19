import React from 'react';
import { Link } from 'react-router';

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

import './navbar.css';

export default class Navman extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
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
                <NavLink class="navtext" href="/pricing">
                  Pricing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink class="navtext" href="/components/">
                  Class Timetable
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  class="navtext"
                  href="https://github.com/reactstrap/reactstrap"
                >
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
                  <DropdownItem>Oilstore</DropdownItem>
                  <DropdownItem>About Us</DropdownItem>
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
