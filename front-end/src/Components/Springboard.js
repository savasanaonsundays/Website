import React, { Component } from 'react';
import './springboard.css';
import { Container, Row, Col } from 'reactstrap';
import Item from './Card';

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
              <Item
                title="Private Lessons"
                image={require('../Assets/springboard/yoga.png')}
              />
            </div>
            <div className="col-md-4">
              <Item
                title="Oil Store"
                image={require('../Assets/springboard/oil.png')}
              />
            </div>
            <div className="col-md-4">
              <Item
                title="Blog"
                image={require('../Assets/springboard/blog.jpeg')}
              />
            </div>
          </Row>
          <Row>
            <div className="col-md-4">
              <Item
                title="Class Timetable"
                image={require('../Assets/springboard/timetable.jpeg')}
              />
            </div>
            <div className="col-md-4">
              <Item
                title="Massage"
                image={require('../Assets/springboard/back.png')}
              />
            </div>
            <div className="col-md-4">
              <Item
                title="About Us"
                image={require('../Assets/springboard/image.png')}
              />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Springboard;
