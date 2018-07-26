import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import PendingBookings from './Components/Dashboard/PendingBookings';
import ConfirmedBookings from './Components/Dashboard/ConfirmedBookings';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentAdmin, logoutAdmin } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './Components/common/PrivateRoute';
import Springboard from './Components/LandingPage/Springboard';
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import Aboutme from './Components/Pages/Aboutme';
import Timetable from './Components/Pages/Timetable';
import Yoga from './Components/Pages/Yoga';
import Massage from './Components/Pages/Massage';

import Prices from './Components/Pages/Prices';
import Qualifications from './Components/Pages/Qualifications';
import Hero from './Components/LandingPage/Hero';
import RealHero from './Components/LandingPage/RealHero';
import BookingForm from './Components/Forms/BookingForm';
import Contact from './Components/Forms/Contact';
import Dashboard from './Components/Dashboard/Dashboard';

import { Container, Row, Col } from 'reactstrap';

//!/!/!/!/ ELOUISE RUN THIS FUNCTION TO LOGOUT A USER. MAKE SURE YOU IMPORT STORE AND LOGOUTADMIN THOUGH
// store.dispatch(logoutAdmin())

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentAdmin(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutAdmin());
    window.location.href = '/login';
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        {/* Public Routes */}
        <Route exact path="/" component={RealHero} />
        <Route exact path="/" component={Springboard} />
        <Route exact path="/" component={Footer} />
        <Route exact path="/aboutme" className="notHome" component={Navbar} />
        <Route exact path="/timetable" className="notHome" component={Navbar} />
        <Route exact path="/yoga" className="notHome" component={Navbar} />
        <Route exact path="/massage" className="notHome" component={Navbar} />
        <Route
          exact
          path="/qualifications"
          className="notHome"
          component={Navbar}
        />

        <Route exact path="/pricing" className="notHome" component={Navbar} />
        <Route exact path="/pricing" component={Prices} />
        <Route exact path="/pricing" className="notHome" component={Footer} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        {
          <Switch>
            <Container fluid className="test">
              <PrivateRoute
                exact
                path="/dashboard"
                component={PendingBookings}
              />
              <PrivateRoute
                exact
                path="/dashboard/confirmed"
                component={ConfirmedBookings}
              />
            </Container>
          </Switch>
        }
        <Route exact path="/massage" component={Massage} />
        <Route exact path="/yoga" component={Yoga} />
        <Route exact path="/timetable" component={Timetable} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Route exact path="/qualifications" component={Qualifications} />
        <Route
          exact
          path="/bookingform"
          className="notHome"
          component={Navbar}
        />
        <Route exact path="/contact" className="notHome" component={Navbar} />
        <Route exact path="/timetable" className="notHome" component={Footer} />
        <Route exact path="/yoga" className="notHome" component={Footer} />
        <Route exact path="/massage" className="notHome" component={Footer} />
        <Route exact path="/aboutme" className="notHome" component={Footer} />
        <Route exact path="/bookingform" component={BookingForm} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/bookingform" component={Footer} />
        <Route exact path="/contact" component={Footer} />

        {/* Admin Routes */}
      </div>
    </Router>
  </Provider>
);

export default App;
