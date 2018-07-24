import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentAdmin, logoutAdmin } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './Components/common/PrivateRoute';
import Springboard from './Components/Springboard';
import Landing from './Components/Description';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Aboutme from './Components/Aboutme';
import Bookings from './Components/Bookings';
import Prices from './Components/Prices';
import Qualifications from './Components/Qualifications';
import Hero from './Components/Hero';
import RealHero from './Components/RealHero';
import BookingForm from './Components/BookingForm';

import Dashboard from './Components/dashboard/Dashboard';

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
        <Route exact path="/" component={RealHero} />
        <Route exact path="/" component={Springboard} />
        <Route exact path="/aboutme" className="notHome" component={Navbar} />
        <Route
          exact
          path="/qualifications"
          className="notHome"
          component={Navbar}
        />
        <Route exact path="/pricing" className="notHome" component={Navbar} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Route exact path="/aboutme" component={Aboutme} />
        <Route exact path="/qualifications" component={Qualifications} />
        <Route exact path="/pricing" component={Prices} />
        <Route exact path="/bookingform" component={BookingForm} />

        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
