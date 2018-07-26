import React, { Component } from 'react';
import './massage.css';
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

export default class Massage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    //we callApi
    fetch('/api/content/Massage')
      .then(res => res.json())
      .then(massage => this.setState({ response: massage.text }));
  }

  render() {
    return (
      <div className="background">
        <div className="child">
          <p>{this.state.response}</p>
          <Button color="primary" size="lg" href="/bookingform" block>
            Book a Massage Session
          </Button>
        </div>
      </div>
    );
  }
}
