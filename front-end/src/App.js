import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Springboard from './Components/Springboard';
import Landing from './Components/Description';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Aboutme from './Components/Aboutme';
import Hero from './Components/Hero';
import RealHero from './Components/RealHero';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={RealHero} />
      <Route exact path="/" component={Springboard} />
      <Route exact path="/aboutme" className="notHome" component={Navbar} />
      <Route exact path="/aboutme" component={Aboutme} />

      <Footer />
    </div>
  </Router>
);

export default App;
