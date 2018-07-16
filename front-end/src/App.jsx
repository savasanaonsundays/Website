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

import React from 'react';
import './App.css';
import Springboard from './Components/Springboard';
import Sometext from './Components/Description';
import Navbar from './Components/Navbar';
import Social from './Components/Social';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Sometext />
        <Springboard />

        <Social />
      </div>
    </Router>
  );
};

export default App;
