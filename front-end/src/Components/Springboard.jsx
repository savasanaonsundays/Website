import React, { Component } from 'react';
import './springboard.css';
import Card from './Card';

// export default class Springboard extends React.Component {
//     render() {
//         return (
//             <div> This a placeholder for the Springboard menu </div>
//         )
//     }
// }

// const Springboard = () => {
//     return (<div className="HelloWorld">Hello World!</div>);
//   };

//   export default Springboard;

export class Springboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Springboard">
        Hi
        <Card />
      </div>
    );
  }
}

export default Springboard;
