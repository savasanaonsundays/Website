import React, { Component } from 'react';
import './springboard.css';
import { Container, Row, Col } from 'reactstrap';
import Item from './Card';
import { Link } from 'react-router-dom';

class Springboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Springboard">
        <Container>
          <Row>
            <div className="col-md-4">
              <Link to="/bookingform" style={{ textDecoration: 'none' }}>
                <Item
                  title="Book Now"
                  image={require('../../Assets/springboard/yoga.png')}
                />
              </Link>
            </div>

            <div className="col-md-4">
              <a
                href="https://www.mydoterra.com/savasanaonsundays/#/"
                style={{ textDecoration: 'none' }}
                target="_blank"
              >
                <Item
                  title="Oil Shop"
                  image={require('../../Assets/springboard/oil.png')}
                />
              </a>{' '}
            </div>
            <div className="col-md-4">
              <Link to="/aboutme" style={{ textDecoration: 'none' }}>
                <Item
                  title="About Us"
                  image={require('../../Assets/springboard/image.png')}
                />
              </Link>
            </div>
          </Row>
          <Row>
            <div className="col-md-4">
              <Link to="/yoga" style={{ textDecoration: 'none' }}>
                <Item
                  title="Private Yoga Session"
                  image={require('../../Assets/springboard/timetable.jpeg')}
                />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/massage" style={{ textDecoration: 'none' }}>
                <Item
                  title="Massage"
                  image={require('../../Assets/springboard/back.png')}
                />
              </Link>
            </div>
            <div className="col-md-4">
              <a
                href="https://medium.com/@savasanaonsundaysyoga"
                style={{ textDecoration: 'none' }}
                target="_blank"
              >
                <Item
                  title="Blog"
                  image={require('../../Assets/springboard/blog.jpeg')}
                />
              </a>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Springboard;
