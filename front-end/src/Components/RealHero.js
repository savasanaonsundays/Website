import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Hero from './Hero';
import Navbar from './Navbar';

class RealHero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Hero>
          <Navbar />
        </Hero>
      </div>
    );
  }
}

export default RealHero;
