import React, { Component } from 'react';
import './yoga.css';

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
        </div>
      </div>
    );
  }
}
