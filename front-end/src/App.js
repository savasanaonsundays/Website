// import React, { Component } from 'react';
// import './App.css';

// import Navman from './Components/Navbar';

// const App = () => {
//   return (
//   <Navman />

//   )
// };

// class App extends Component {
//   render() {
//     return (

//         <div>
//             <Navman />

//       </div>
//     );
//   }
// }

// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Springboard from './Components/Springboard';
import Landing from './Components/Description';
import Navbar from './Components/Navbar';
import Social from './Components/Social';
import Aboutme from './Components/Aboutme';
import Hero from './Components/Hero';

const App = () => (
  <Router>
    <div className="App">
      <Hero>
        <Navbar />
      </Hero>
      <Route exact path="/" component={Springboard} />
      <Route path="/aboutme" component={Aboutme} />

      <Social />
    </div>
  </Router>
);

export default App;
