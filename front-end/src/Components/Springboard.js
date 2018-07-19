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
            <Col>
              <Item
                title="Private Lessons"
                image={require('../Assets/springboard/yoga.png')}
              />
            </Col>
            <Col>
              <Item
                title="Oil Store"
                image={require('../Assets/springboard/oil.png')}
              />
            </Col>
            <Col>
              <Item
                title="Blog"
                image={require('../Assets/springboard/blog.jpeg')}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Item
                title="Class Timetable"
                image={require('../Assets/springboard/timetable.jpeg')}
              />
            </Col>
            <Col>
              <Item
                title="Massage"
                image={require('../Assets/springboard/back.png')}
              />
            </Col>
            <Col>
              <Item
                title="About Us"
                image={require('../Assets/springboard/image.png')}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Springboard;
