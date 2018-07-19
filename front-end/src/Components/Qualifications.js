import React, { Component } from 'react';
import './aboutme.css';

export default class Qualifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    //we callApi
    fetch('/api/content/qualifications')
      .then(res => res.json())
      .then(qualification => this.setState({ response: qualification.text }));
  }

  render() {
    return (
      <div className="background">
        <div className="child">
          <p>{this.state.response}</p>
        </div>
        <div className="child">{this.state.response}</div>
      </div>
    );
  }
}
