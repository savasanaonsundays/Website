import React, { Component } from 'react';
import './massage.css';

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
        </div>
      </div>
    );
  }
}
