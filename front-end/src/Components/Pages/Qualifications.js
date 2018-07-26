import React, { Component } from 'react';
import './qualifications.css';

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
      .then(qualifications => this.setState({ response: qualifications.text }));
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
