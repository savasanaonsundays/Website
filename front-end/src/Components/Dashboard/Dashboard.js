import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { logoutAdmin } from '../../actions/authActions';
import './dashboard.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PendingBookings from './PendingBookings';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutAdmin();
  }

  render() {
    return (
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
            <NavLink href="" onClick={this.onLogoutClick.bind(this)}>
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutAdmin }
)(Dashboard);
