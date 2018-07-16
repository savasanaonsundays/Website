import React, { Component } from 'react';
import './springboard.css';
import { Container, Row, Col } from 'reactstrap';
import Item from './Card';

// export default class Springboard extends React.Component {
//     render() {
//         return (
//             <div> This a placeholder for the Springboard menu </div>
//         )
//     }
// }

// const Springboard = () => {
//     return (<div className="HelloWorld">Hello World!</div>);
//   };

//   export default Springboard;

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
              <Item title="Oil Store" />
            </Col>
            <Col>
              <Item title="Blog" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Item title="Class Timetable" />
            </Col>
            <Col>
              <Item title="Massage" />
            </Col>
            <Col>
              <Item title="About Us" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Springboard;
