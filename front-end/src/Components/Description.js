import React, { Component } from 'react';

// const Sometext = () => {
//     return (
//         "Hello World"
//     )
// };

class Sometext extends Component {
  constructor() {
    super();
    this.state = {
      text: []
    };
  }

  render() {
    return 'Hello World';
  }
}

export default Sometext;
