import React, { Component } from 'react';

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

  //   callApi = async () => { // We create callApi method to interact with Express API
  //     const response = await fetch('http://localhost:7000/api/content/AboutMe');
  //     console.log(response);
  //     const body = await response.json();

  //     if (response.status !== 200) throw Error(body.message);

  //     return body;
  //   };

  render() {
    return (
      <div>
        <p>{this.state.response}</p>
      </div>
    );
  }
}
