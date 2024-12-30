import './assets/style.css';
import './assets/twoDimensionStyle.css';
import './assets/threeDimensionalStyle.css';
import './assets/thinkingThreeDimensionStyle.css';

import React from 'react';
import Navbar from './Components/Navbar';
import TwoDimensionalGrid from './Components/TwoDimensionalGrid';
import ThinkingThreeDimensions from './Components/ThinkingThreeDimensions';
import ThreeDimensionalGrid from './Components/ThreeDimensionalGrid';

function App() {

  return (
    <>
      <Navbar />
      <TwoDimensionalGrid />
      <ThinkingThreeDimensions />
      <ThreeDimensionalGrid />
    </>
  )
}

export default App
