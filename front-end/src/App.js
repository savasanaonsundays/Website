import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Springboard from './Components/Springboard';
import Landing from './Components/Description';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Aboutme from './Components/Aboutme';
import Bookings from './Components/Bookings';
import Prices from './Components/Prices';
import Qualifications from './Components/Qualifications';
import Hero from './Components/Hero';

const App = () => (
  <Router>
    <div className="App">
      <Hero>
        <Navbar />
      </Hero>
      <Route exact path="/" component={Springboard} />
      <Route exact path="/aboutme" component={Aboutme} />
      <Route exact path="/qualification" component={Qualifications} />
      <Route exact path="/pricing" component={Prices} />

      <Footer />
    </div>
  </Router>
);

export default App;
