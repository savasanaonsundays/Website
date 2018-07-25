import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './dashboard.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PendingBookings from './PendingBookings';

export default () => {
  return (
    <div>
      <div className="dashNav1">
        <Nav vertical className="dashNav">
          <NavItem className="navLink">
            <NavLink href="/dashboard">Pending</NavLink>
          </NavItem>
          <NavItem className="navLink">
            <NavLink href="/dashboard/confirmed">Confirmed</NavLink>
          </NavItem>
          <NavItem className="navLink">
            <NavLink href="#">Add Availability</NavLink>
          </NavItem>
          <NavItem className="navLink">
            <NavLink href="#">Content Management</NavLink>
          </NavItem>
          <NavItem className="navLink">
            <NavLink href="#">Logout</NavLink>
          </NavItem>
        </Nav>
      </div>

      {/* <div className="test">
        <Route path="/dashboard" component={Footer} />
        </div> */}
    </div>
  );
};
