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
      .then(aboutme =>
        this.setState({
          response: aboutme.text,
          lol: aboutme.name
        })
      ),
      fetch('/api/content/qualifications')
        .then(res => res.json())
        .then(qualifications => this.setState({ qual: qualifications.text }));
  }

  render() {
    return (
      <div className="pusher">
        <div className="child">
          <p className="bob">{this.state.response}</p>
          <p className="bob">{this.state.qual}</p>
        </div>
      </div>
    );
  }
}
