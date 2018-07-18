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
// add test comment
// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Springboard from './Components/Springboard';
import Landing from './Components/Description';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
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

      <Footer />
    </div>
  </Router>
);

export default App;
