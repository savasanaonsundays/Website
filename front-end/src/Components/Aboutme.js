import React, { Component } from 'react';
import './aboutme.css';

export default class Aboutme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    //we callApi
    fetch('/api/content/AboutMe')
      .then(res => res.json())
      .then(aboutme => this.setState({ response: aboutme.text }));
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
