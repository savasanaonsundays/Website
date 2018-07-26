import React, { Component } from 'react';
import './yoga.css';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
export default class Yoga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    //we callApi
    fetch('/api/content/Yoga')
      .then(res => res.json())
      .then(yoga => this.setState({ response: yoga.text }));
  }

  render() {
    return (
      <div className="background">
        <div className="child">
          <p>{this.state.response}</p>
          <Button color="primary" size="lg" href="/bookingform" block>
            Book a Private Yoga Session
          </Button>
        </div>
      </div>
    );
  }
}
