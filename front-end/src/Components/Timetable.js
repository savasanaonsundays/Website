import React, { Component } from 'react';
import './timetable.css';

export default class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    //we callApi
    fetch('/api/content/Timetable')
      .then(res => res.json())
      .then(timetable => this.setState({ response: timetable.text }));
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
